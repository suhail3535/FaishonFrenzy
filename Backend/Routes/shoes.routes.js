const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); 
const { ShoesModel } = require("../models/shoes.models");

const shoesRouter = express.Router();

shoesRouter.get("/", async (req, res) => {
  const { rating, sort, limit, page } = req.query;

  const skip = (page - 1) * limit;

  let obj = {};
  for (let x in req.query) {
    if (x !== "page" && x !== "limit" && x !== "sort") {
      if (x === "rating") {
        obj["rating"] = { $gte: rating };
      } else {
        obj[x] = req.query[x];
      }
    }
  }

  //for price soritng
  let sortprice = {};
  if (sort === "asc") {
    sortprice = { price: 1 };
  } else if (sort === "desc") {
    sortprice = { price: -1 };
  }
  try {
    const dressitem = await ShoesModel.find(obj)
      .skip(skip)
      .limit(limit)
      .sort(sortprice);
    res.status(200).send(dressitem);
  } catch (error) {
    res.status(400).send({ msg: "can not fetch a data" });
  }
});

shoesRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  console.log(id);
  // const data = req.query;
  // console.log(data);
  // let obj;
  try {
    const dressDetail = await ShoesModel.find({ _id: id });
    if (dressDetail) {
      res.status(200).send(dressDetail);
    } else {
      res.status(400).send("Product not found");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
});

shoesRouter.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    const dressitem = new ShoesModel(payload);
    await dressitem.save();
    res.status(200).send({ message: "item has been Added" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = {
  shoesRouter,
};
