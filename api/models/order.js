const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
  snacks: [
    {
      snackId: {
        type: Schema.Types.ObjectId,
        ref: "Snack",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);
