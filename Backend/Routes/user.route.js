const { UserModel } = require("../models/user.models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const express = require("express");
const userRouter = express.Router();

//register
userRouter.post("/register", async (req, res) => {
  const { email, password, name } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      const user = new UserModel({ email, password: hash, name });
      await user.save();

      res.status(200).send({ message: "User Registered" });
    });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email: email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          res.status(200).send({
            message: "Login Successfull",
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
  userRouter,
};
