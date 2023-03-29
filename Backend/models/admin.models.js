const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
  {
    image: String,
    title: String,
    price: Number,
    rating: Number,
   
  },
  {
    versionKey: false,
  }
);

const AdminModel = mongoose.model("admin", adminSchema);

module.exports = {
  AdminModel,
};
