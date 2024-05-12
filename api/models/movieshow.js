const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieshowSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  showTime: {
    type: Date,
    required: true,
  },
  movieId: {
    type: Schema.Types.ObjectId,
    ref: "Movie",
    required: true,
  },
  hallId: {
    type: Schema.Types.ObjectId,
    ref: "Hall",
    required: true,
  },
});

module.exports = mongoose.model("MovieShow", movieshowSchema);
