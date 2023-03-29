const express = require("express");
const { PageModel } = require("../models/page.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const pageRouter = express.Router();

pageRouter.get("/", async (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, "project");

  try {
    if (decoded) {
      const pageitem = await PageModel.find({ userID: decoded.userID });
      res.status(200).send(pageitem);
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

pageRouter.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    const pageitem = new PageModel(payload);
    await pageitem.save();
    res.status(200).send({ message: "item has been Added" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = {
  pageRouter,
};
