const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
  email: String,
    password: String,
  location:String
}, {
    versionKey:false
});

const UserModel = mongoose.model("user", userSchema);

module.exports = {
    UserModel
};
