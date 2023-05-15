const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const OrgSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  ein: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  address: {
    type: String,
  },
  revenue: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  employees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "emp",
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("org", OrgSchema);
