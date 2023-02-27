const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

const server = app.listen((process.env.PORT || 5001), () => {
  console.log(`Server started on Port ${process.env.PORT}`);
});
