const express = require('express');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const mongooseConnection = require('./config/mangoose-connection');
require('dotenv').config();
const authRouter = require('./routes/auth');
const app = express();

app.use(cors());
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true }
}));
app.use(passport.session());

//DB
mongooseConnection();

//Routes
app.use('/', authRouter);

const server = app.listen((process.env.PORT || 5001), () => {
  console.log(`Server started on Port ${process.env.PORT}`);
});
