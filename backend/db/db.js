const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((error) => {
      console.log("Error connecting to the database:", error);
    });
}

module.exports = connectToDb;
