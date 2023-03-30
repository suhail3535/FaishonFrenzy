const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { DressModel } = require("../models/dress.models");

const dressRouter = express.Router();

dressRouter.get("/", async (req, res) => {
  const { brand, rating, price } = req.query; 
  const data = req.query; 
  console.log(data); 
  let obj;
  try {
    if (price == "asc") { 
      obj = { price: 1 };
    } else if (price == "desc") {
      obj = { price: -1 };
    } 
    
    if (rating) {
      const dressitem = await DressModel.find({rating:{ $gt: rating }}).sort(obj);
      res.status(200).send(dressitem);
    }
    else{
      const dressitem = await DressModel.find().sort(obj);
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
