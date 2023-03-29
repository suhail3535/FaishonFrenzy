const express = require("express");
const app = express();

const { AdminModel } = require("../models/admin.models");
app.use(express.json());
const adminRouter = express.Router();


// <--------------------postrequest-------------------------->

adminRouter.post("/add", async (req, res) => {
  const data = req.body;
  try {adminRouter
    const user = new AdminModel(data);
    await user.save();
    res.status(200).send({ msg: "product added" });
  } catch (error) {
    res.status(400).send({ msg: error.msg });
  }
});

// <--------------------getrequest-------------------------->

adminRouter.get("/", async (req, res) => {
  try {
    const users = await AdminModel.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send({ msg: "error.msg " });
  }
});


// <--------------------updaterequest-------------------------->

adminRouter.patch("/update/:userID", async (req, res) => {
  const { userID } = req.params;
  const data = req.body;
  try {
    await AdminModel.findByIdAndUpdate({ _id: userID }, data);
    res.status(200).send({ msg: "product details updated" });
  } catch (error) {
    res.status(400).send({ msg: error.msg });
  }
});

// <--------------------deleterequest-------------------------->


adminRouter.delete("/delete/:userID", async (req, res) => {
  const { userID } = req.params;
  try {
    await AdminModel.findByIdAndDelete({ _id: userID });
    res.status(200).send({ msg: " product details deleted" });
  } catch (error) {
    res.status(400).send({ msg: error.msg });
  }
});

// export userRouter
module.exports = {
  adminRouter,
};
