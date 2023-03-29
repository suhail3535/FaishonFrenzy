const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { DressModel } = require("../models/dress.models");

const dressRouter = express.Router();

dressRouter.get("/", async (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, "project");

  try {
    if (decoded) { 
      const dressitem = await DressModel.find({ userID: decoded.userID });
      res.status(200).send(dressitem);
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

dressRouter.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    const dressitem = new DressModel(payload);
    await dressitem.save();
    res.status(200).send({ message: "item has been Added" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = {
  dressRouter,
};
