const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
  },
  genre: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  starsId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Stars",
      required: true,
    },
  ],
  releaseDate: {
    type: Date,
    required: true,
  },
  synopsis: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  reviewId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
      required: true,
    },
  ],
});

module.exports = mongoose.model("Movie", movieSchema);
