const express = require("express");
const app = express();

app.listen(8000, () => {
  console.log("Application started and Listening on port 8000");
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});