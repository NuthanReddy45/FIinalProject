const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const Emp = require("../../models/emp");
const Org = require("../../models/org");
const auth = require("../../middleware/auth");
const { CURSOR_FLAGS } = require("mongodb");
const {
  employeeAdditionConfirmationTemplate,
  transporter,
} = require("../../config/email");
const profile = require("../../models/profile");

// get  all emps

router.get("/emp/:id", auth, async (req, res) => {
  const org = req.params.id;

  try {
    const curOrg = await Org.findById(org);
    const results = await Emp.find({ _id: { $in: curOrg.employees } });
    res.json(results);
  } catch (err1) {
    console.log("error in retrieving org err1 = ", err1);
  }
});

// delete employees

router.delete("/emp/:id1/:id2", auth, async (req, res) => {
  const empId = req.params.id2;
  const orgId = req.params.id1;

  console.log("params ", req.params);

  try {
    const curEmp = await Emp.deleteOne({ _id: empId });

    const curOrg = await Org.findById(orgId);

    curOrg.employees.filter((item) => item != empId);

    await curOrg.save();

    const results = await Emp.find();
    res.json(results);
  } catch (err1) {
    console.log("error in deleting emp  = ", err1);
  }
});

router.post("/emp", auth, async (req, res) => {
  // add org in list b
  const { name, income, org, email, panNo, aadharNo } = req.body;

  try {
    const temp1 = await Emp.findOne({ aadharNo: aadharNo });

    // console.log("duplicate emp = ", aadharNo, temp1);

    if (temp1) {
      console.log("Duplicate employee");
      return res.status(400).send("Employee already registered ");
    }

    // send mail to employee

    const curOrg = await Org.findById(org);

    const temp = new Emp({
      name,
      income,
      email,
      panNo,
      aadharNo,
    });

    const curEmp = await temp.save();
    curOrg.employees.push(curEmp.id);
    await curOrg.save();
    const fact = await profile.find({ user: curOrg.user });

    // const token = createEmailVerificationToken(dev);
    // const url = createEmailVerificationUrl(dev._id, token);
    const mailOptions = employeeAdditionConfirmationTemplate(
      curEmp,
      fact.factName
    );
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err, info);
        return res.status(500).json({
          message: "Error sending email! 😢",
          type: "error",
        });
      }
    });

    res.json(curEmp);
  } catch (err1) {
    console.log("error in getting org employee arrays = ", err1);
  }
});

router.post("/", auth, async (req, res) => {
  const user = req.user.id;

  const { type, revenue, ein, address, description } = req.body;

  try {
    const curUser = await User.findById(user);

    const temp = new Org({
      user,
      type,
      revenue,
      description,
      ein,
      address,
    });

    const curOrg = await temp.save();
    curUser.org.push(curOrg.id);
    await curUser.save();

    const results = await Org.find({ _id: { $in: curUser.org } });

    res.json(results);
  } catch (err1) {
    console.log("error in getting user err1 = ", err1);
  }
});

router.delete("/:id", auth, async (req, res) => {
  const user = req.user.id;

  try {
    const curUser = await User.findById(user);

    curUser.org = curUser.org.filter((id) => id != req.params.id);

    await Org.deleteOne({ _id: req.params.id });

    await curUser.save();

    const results = await Org.find();

    res.json(results);
  } catch (err1) {
    console.log("error in deleting org = ", err1);
  }
});

// get all orgs for current user
router.get("", auth, async (req, res) => {
  const userId = req.user.id;

  try {
    const curUser = await User.findById(userId);
    const orgArray = curUser.org;

    // console.log("array  = ", orgArray);

    const results = await Org.find({ _id: { $in: orgArray } });

    // console.log("all orgs returned ", results);

    return res.json(results);
  } catch (err1) {
    console.log("error in getting user err1 = ", err1);
  }

  res.status(400).send("fail");
});

module.exports = router;
