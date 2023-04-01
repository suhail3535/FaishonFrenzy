// const { UserModel } = require("../models/user.models");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const express = require("express");
// const userRouter = express.Router();

// //register
// userRouter.post("/register", async (req, res) => {
//   const { email, password, name } = req.body;
//   try {
//     bcrypt.hash(password, 5, async (err, hash) => {
//       const user = new UserModel({ email, password: hash, name });
//       await user.save();

//       res.status(200).send({ message: "User Registered" });
//     });
//   } catch (error) {
//     res.status(400).send({ message: error.message });
//   }
// });

// userRouter.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await UserModel.findOne({ email: email });
//     if (user) {
//       bcrypt.compare(password, user.password, (err, result) => {
//         if (result) {
//           res.status(200).send({
//             message: "Login Successfull",
//             token: jwt.sign({ userID: user._id }, "project"), //we can pass information also in jwt like userID
//           });
//         } else {
//           res.status(400).send({ message: "Wrong Credentials! " });
//         }
//       });
//     } else {
//       res.status(400).send({ message: "User Not Found. Plz Register" });
//     }
//   } catch (error) {
//     res.status(400).send({ message: error.message });
//   }
// });
// module.exports = {
//   userRouter,
// };




const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserModel } = require("../models/user.models");
const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  const data = await UserModel.find();
  res.send(data);
});
userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const userPresent = await UserModel.findOne({ email: email });
  // console.log(req.body);
  if (userPresent?.email) {
    res.send({ msg: "User already exists" });
  } else {
    try {
      bcrypt.hash(password, 5, async (err, secure_password) => {
        if (err) {
          console.log(err);
        } else {
          const user = new UserModel({
            email,
            password: secure_password,
            name,
          });
          await user.save();
          res.send({ msg: "Registered SucessFully" });
        }
      });
    } catch (e) {
      res.send({ msg: "Error in registering the user" });
      console.log(e);
    }
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (result) {
          const token = jwt.sign({ userID: user[0]._id }, "project");
          // console.log(token);
          res.send({ msg: "Logged in SuccessFull", token: token });
        } else {
          res.send({ msg: "Wrong Credentials" });
        }
      });
    } else {
      res.send({ msg: "Wrong Credentials" });
    }
  } catch (e) {
    res.send({ msg: "Logged In Failed" });
    console.log(e);
  }
});
module.exports = {
  userRouter,
};