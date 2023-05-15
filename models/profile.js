const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  bussiness: {
    type: String,
  },
  location: {
    type: String,
  },
  aadharNo: {
    type: String,
  },
  panNo: {
    type: String,
  },
  regID: {
    type: String,
  },
  factName: {
    type: String,
  },
  act1: {
    type: String,
    default: "",
  },
  act4: {
    type: String,
    default: "",
  },
  act2: {
    type: String,
    default: "",
  },
  act3: {
    type: String,
    default: "",
  },
  bio: {
    type: String,
    default: "",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("profile", ProfileSchema);
