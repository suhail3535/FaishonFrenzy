const express = require("express");
const { CartModel } = require("../models/cart.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const cartRouter = express.Router();

cartRouter.get("/", async (req, res) => {
  try {
    const cartitem = await CartModel.find();
    res.status(200).send(cartitem);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});



cartRouter.post("/add", async (req, res) => {
  const payload = req.body;
  console.log("from BE",payload)
  try {
    const cartitem = new CartModel(payload);
    await cartitem.save();
    console.log("saved")
    res.status(200).send(cartitem);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = {
  cartRouter,
};
