const mongoose = require("mongoose");

const ReturnSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  regNo: {
    type: String,
  },
  factName: {
    type: String,
  },
  occpName: {
    type: String,
  },
  EmpName: {
    type: String,
  },
  address: {
    type: String,
  },
  typeOfBussiness: {
    type: String,
  },
  numOfEmps: {
    type: String,
  },
  man: {
    type: String,
  },
  totEmps: {
    type: String,
  },
  empOnLeave: {
    type: String,
  },
  empPaidLeaves: {
    type: String,
  },
  year: {
    type: String,
  },
  act: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("returns", ReturnSchema);
