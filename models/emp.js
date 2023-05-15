const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const EmpSchema = new mongoose.Schema({
  org: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "org",
  },
  name: {
    type: String,
    required: true,
  },
  income: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
  },
  panNo: {
    type: String,
    required: true,
  },
  aadharNo: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("emp", EmpSchema);
