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
  returns: [{ type: mongoose.Schema.Types.ObjectId, ref: "returns" }],
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "Employer",
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
  filled: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", UserSchema);
