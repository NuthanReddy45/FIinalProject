const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  org: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "org",
    },
  ],
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "profile",
  },
  type: {
    type: String,
    default: "org",
  },
  name: {
    type: String,
    required: true,
  },
  phnNo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  filled: [
    {
      type: String,
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", UserSchema);
