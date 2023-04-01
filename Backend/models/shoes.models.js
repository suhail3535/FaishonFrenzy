const mongoose = require("mongoose");

const shoesSchema = mongoose.Schema(
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

const ShoesModel = mongoose.model("shoes", shoesSchema);

module.exports = {
  ShoesModel,
};
