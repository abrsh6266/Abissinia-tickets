const mongoose = require("mongoose");
const { Schema } = mongoose;

const starSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    website: {
      type: String,
    },
  },
  profilePhoto: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Star", starSchema);
