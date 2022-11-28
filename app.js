require("dotenv").config();
const express = require("express");
const user = require("./model/user");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>hello divesh sir are you enjoying programing </h1>");
});

app.post("/singin", async (req, res) => {
  // For All Mandatory Fileds
  const { firstname, lastnname, email, password } = req.body;
  if (!firstname && lastnname && email && password) {
    res.status(400).send("All fields are required ");
  }

  // For uniqueness of email
  const extUser = await user.findOne(email);
  if (extUser) {
    res.status(400).send("This email already exists");
  }
  // password
});

module.exports = app;
