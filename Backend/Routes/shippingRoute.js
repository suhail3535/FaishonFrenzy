const express = require("express");
const app = express();

const { shippingAddress } = require("../models/shipping.models");
app.use(express.json());
const shippingRouter = express.Router();

// <--------------------postrequest-------------------------->

shippingRouter.post("/add", async (req, res) => {
  const data = req.body;
  try {
    shippingAddress;
    const user = new shippingAddress(data);
    await user.save();
    res.status(200).send({ msg: "product added" });
  } catch (error) {
    res.status(400).send({ msg: error.msg });
  }
});

// <--------------------getrequest-------------------------->

shippingRouter.get("/", async (req, res) => {
  try {
    const users = await shippingAddress.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send({ msg: "error.msg " });
  }
});

// <--------------------updaterequest-------------------------->

shippingRouter.patch("/update/:userID", async (req, res) => {
  const { userID } = req.params;
  const data = req.body;
  try {
    await shippingAddress.findByIdAndUpdate({ _id: userID }, data);
    res.status(200).send({ msg: "product details updated" });
  } catch (error) {
    res.status(400).send({ msg: error.msg });
  }
});

// <--------------------deleterequest-------------------------->

shippingRouter.delete("/delete/:userID", async (req, res) => {
  const { userID } = req.params;
  try {
    await shippingAddress.findByIdAndDelete({ _id: userID });
    res.status(200).send({ msg: " product details deleted" });
  } catch (error) {
    res.status(400).send({ msg: error.msg });
  }
});

// export userRouter
module.exports = {
  shippingRouter,
};
