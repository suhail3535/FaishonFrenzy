const mongoose = require("mongoose");

const dressSchema = mongoose.Schema(
  {
    name: String,
    img: String,
    price: Number,
    Spise: Number,
    brand: String,
    rating: Number
  },
  {
    versionKey: false,
  }
);

const DressModel = mongoose.model("dress", dressSchema);

module.exports = {
  DressModel,
};
