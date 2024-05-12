const mongoose = require("mongoose");

const { Schema } = mongoose;

const hallSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  rows: {
    type: Number,
    required: true,
  },
  columns: {
    type: Number,
    required: true,
  },
  address: {
    map: {
      type: String,
    },
  },
  vip: {
    seats: [
      {
        row: {
          type: Number,
        },
        column: {
          type: Number,
        },
        price: {
          type: Number,
        },
      },
    ],
  },
});

module.exports = mongoose.model("Hall", hallSchema);
