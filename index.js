const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const getuser = {
  name: "vikash sharma",
  age: "22",
  email: "vsvnkfn@gmail.com",
};
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("vikashdotcom");
});

app.get("/login", (req, res) => {
  res.send("<h1>please login</h1>");
});

app.get("/signup", (req, res) => {
  res.send("<h2>please signup</h2>");
});

app.get("/getuser", (req, res) => {
  res.json(getuser);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
