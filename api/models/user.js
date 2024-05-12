const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileUrl: {
    type: String,
    // required: true,
  },
  role: {
    type: String,
    default: "Basic",
  },
});

module.exports = mongoose.model("User", userSchema);
