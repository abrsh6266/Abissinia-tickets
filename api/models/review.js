const mongoose = require("mongoose");
const { Schema } = mongoose;
const reviewSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  rating: {
    type: Number,
  },
  comment: {
    type: String,
  },
  date: {
    type: Date,
    ddefault: Date.now,
  },
});

module.exports = mongoose.model("Review", reviewSchema);
