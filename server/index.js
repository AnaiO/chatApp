const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();


mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

app.use(cors());
app.use(express.json());

const server = app.listen((process.env.PORT || 5001), () => {
  console.log(`Server started on Port ${process.env.PORT}`);
});
