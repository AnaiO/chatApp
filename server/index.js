const express = require('express');
const cors = require('cors');
const mongooseConnection = require('./helpers/mangoose-connection');
require('dotenv').config();
const authRouter = require('./routes/auth');
const app = express();

app.use(cors());
app.use(express.json());

mongooseConnection();

app.use('/', authRouter);

const server = app.listen((process.env.PORT || 5001), () => {
  console.log(`Server started on Port ${process.env.PORT}`);
});
