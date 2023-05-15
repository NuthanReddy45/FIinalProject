const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
// const normalize = require('normalize-url');

const User = require("../../models/user");
const {
  createEmailVerificationToken,
  createEmailVerificationUrl,
} = require("../../config/email");

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  "/",
  check("name", "Name is required").notEmpty(),
  check("email", "Please include a valid email").isEmail(),
  check("phnNo", "Please include a valid Phn No.").isMobilePhone(),
  check(
    "password",
    "Please enter a password with 6 or more characters"
  ).isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phnNo, password } = req.body;

    console.log("user deteails = ", name, email);

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      // const avatar = normalize(
      //   gravatar.url(email, {
      //     s: '200',
      //     r: 'pg',
      //     d: 'mm'
      //   }),
      //   { forceHttps: true }
      // );

      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });

      console.log("avatar= ", avatar);

      dev = new User({
        name,
        email,
        password,
        phnNo,
        avatar,
      });

      const salt = await bcrypt.genSalt(10);

      dev.password = await bcrypt.hash(password, salt);

      const saved = await dev.save();

      const payload = {
        user: {
          id: dev.id,
        },
      };

      const token = createEmailVerificationToken(dev);
      const url = createEmailVerificationUrl(dev._id, token);
      const mailOptions = emailVerificationTemplate(saved, url);
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.log(err, info);
          return res.status(500).json({
            message: "Error sending email! 😢",
            type: "error",
          });
        }
      });

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: "5 days" },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
