const express=require("express")
const { CartModel } = require("../models/cart.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const cartRouter = express.Router();

cartRouter.get("/", async (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, "project");

  try {
    if (decoded) {
      const cartitem = await CartModel.find({ userID: decoded.userID });
      res.status(200).send(cartitem);
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

cartRouter.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    const cartitem = new CartModel(payload);
    await cartitem.save();
    res.status(200).send({ message: "item has been Added" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = {
  cartRouter
};