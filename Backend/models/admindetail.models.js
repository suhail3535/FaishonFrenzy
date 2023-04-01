//this route is for admin login and details
const mongoose = require("mongoose");
const admindetailsSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    userID: String,
  },
  {
    versionKey: false,
  }
);

const AdminDetails = mongoose.model("admindetails", admindetailsSchema);

module.exports = {
  AdminDetails,
};
