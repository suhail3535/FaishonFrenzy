

const { AdminDetails } = require("../models/admindetail.models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const express = require("express");
const admin_Details_Router = express.Router();

//register
admin_Details_Router.post("/register", async (req, res) => {
  const { email, password, name } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      const user = new AdminDetails({ email, password: hash, name });
      await user.save();

      res.status(200).send({ message: "Admin Registered" });
    });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

admin_Details_Router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await AdminDetails.findOne({ email: email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          res.status(200).send({
            message: "Admin Login Successfull",
            token: jwt.sign({ userID: user._id }, "project"), //we can pass information also in jwt like userID
          });
        } else {
          res.status(400).send({ message: "Wrong Credentials! " });
        }
      });
    } else {
      res.status(400).send({ message: "User Not Found. Plz Register" });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
module.exports = {
  admin_Details_Router,
};
