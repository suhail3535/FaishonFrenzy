require("dotenv").config();
const express = require("express");
const { connection } = require("./config/db");
const { userRouter } = require("./Routes/user.route");
const { pageRouter } = require("./Routes/page.route");
const { cartRouter } = require("./Routes/cart.route");
const { dressRouter } = require("./Routes/dress.routes");
// const { auth } = require("./middlewere/auth.middleware");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome To HomePage");
});

app.use("/users", userRouter);
app.use("/pages", pageRouter);
app.use("/carts", cartRouter);
// app.use(auth);
app.use("/dress", dressRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to DataBase");
  } catch (error) {
    console.log("Couldn't connect to DataBase");
  }
  console.log(`Server running on port ${process.env.port}`);
});
