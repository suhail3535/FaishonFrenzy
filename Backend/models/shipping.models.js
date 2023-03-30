const mongoose = require("mongoose");

const shippingSchema = mongoose.Schema(
    {
        firstname: String,
        lastname: String,
        address1: String,
        zipcode: Number,
        city: String,
        phone: Number,
    },
    {
        versionKey: false,
    }
);

const shippingAddress = mongoose.model("Address", shippingSchema);

module.exports = {
  shippingAddress,
};
