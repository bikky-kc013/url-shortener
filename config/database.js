const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: process.env.DB_NAME,
    });
    console.log("Connected to Database");
  } catch (err) {
    console.log(`The error is : ${err}`);
  }
};
module.exports = { connection };
