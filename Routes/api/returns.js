const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const Emp = require("../../models/emp");
const Org = require("../../models/org");
const Returns = require("../../models/return");
const auth = require("../../middleware/auth");

router.get("/:year/:type", auth, async (req, res) => {
  const user = req.user.id;
  const { year, type } = req.params;

  try {
    const curUser = await User.findById(user).populate("returns");
    console.log(curUser);
    if (curUser.filled != year) {
      console.log("caught you");
      return res
        .status(400)
        .json({ msg: "You haven't yet filled Returns for this year" });
    }

    const curReturn = curUser.returns.filter(
      (i) => i.year === year && i.act === type
    );
    res.json(curReturn[0]);
  } catch (error) {
    console.log("error in retrieving user err1 = ", error);
  }
});

router.post("/", auth, async (req, res) => {
  const user = req.user.id;

  const {
    regNo,
    factName,
    occpName,
    EmpName,
    address,
    typeOfBussiness,
    numOfEmps,
    man,
    totEmps,
    empOnLeave,
    empPaidLeaves,
    year,
    act,
  } = req.body;

  try {
    const curUser = await User.findById(user);

    if (curUser.filled === year) {
      console.log("caught you");
      return res
        .status(400)
        .json({ msg: "You have already filled Returns for this year" });
    }

    const temp = new Returns({
      user,
      regNo,
      factName,
      occpName,
      EmpName,
      address,
      typeOfBussiness,
      numOfEmps,
      man,
      totEmps,
      empOnLeave,
      empPaidLeaves,
      year,
      act,
    });

    const curReturn = await temp.save();
    curUser.filled = year;
    curUser.returns.push(curReturn._id);
    await curUser.save();
    res.json(curReturn);
  } catch (err1) {
    console.log("error in retrieving user err1 = ", err1);
  }
});

router.put("/:year/:id", auth, async (req, res) => {
  const user = req.user.id;
  const { year, id } = req.params;

  try {
    const curUser = await User.findById(user);

    if (curUser.filled != year) {
      console.log("caught you");
      return res
        .status(400)
        .json({ msg: "You haven't filled Returns for this year" });
    }

    const result = await Returns.findByIdAndUpdate(id, req.body, { new: true });
    res.json(result);
  } catch (err1) {
    console.log("error in retrieving user err1 = ", err1);
  }
});

module.exports = router;
