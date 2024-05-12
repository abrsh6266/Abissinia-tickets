const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookingSchema = new Schema({
  bookingDate: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  movieShowId: {
    type: Schema.Types.ObjectId,
    ref: "MovieShow",
    required: true,
  },
  order: {
    type: Schema.Types.ObjectId,
    ref: "Order",
  },
  seats: {
    booked: [
      {
        row: {
          type: Number,
          required: true,
        },
        column: {
          type: Number,
          required: true,
        },
      },
    ],
  },

  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
