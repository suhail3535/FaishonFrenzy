const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    title: String,
    image: String,
    price: String,
    name:String,
    rating:String
  },
  {
    versionKey: false,
  }
);

const CartModel = mongoose.model("cart", cartSchema);

module.exports = {
  CartModel,
};
