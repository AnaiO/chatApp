const mongoose = require('mongoose');

function mongooseConnection() {
  try {
    mongoose.connect(
      process.env.MONGO_URL, 
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      () => console.log("Mongoose is connected"),
    );
  } catch(e) {
    console.log(e, " Could not connect");
  }
}

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log("Connection error: " + err));
dbConnection.once("open", () => console.log("Connected to DB"));

module.exports = mongooseConnection;