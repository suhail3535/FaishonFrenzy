const mongoose = require("mongoose");

const pageSchema = mongoose.Schema(
  {
    title: String,
    image: String,
    price: String,
  },
  {
    versionKey: false,
  }
);

const PageModel = mongoose.model("page", pageSchema);

module.exports = {
  PageModel
};
