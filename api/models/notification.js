const mongoose = require("mongoose");
const { Schema } = mongoose;

const notificationSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Notification", notificationSchema);
