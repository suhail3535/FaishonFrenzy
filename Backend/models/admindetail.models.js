//this route is for admin login and details
const mongoose = require("mongoose");
const admindetailsSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
 
  },
  {
    versionKey: false,
  }
);

const AdminModel = mongoose.model("admindetails", admindetailsSchema);

module.exports = {
  AdminModel,
};
