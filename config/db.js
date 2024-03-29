const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db);

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with error code 1(Failure)
    process.exit(1);
  }
};

module.exports = connectDB;
