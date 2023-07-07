require("dotenv").config();
const mongoose = require("mongoose");

module.exports.connect = async () => {
  try {
    await mongoose.set("strictQuery", false);
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.dzfrtdn.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("connect success");
  } catch (error) {
    console.log("Connect database fail: " + error);
  }
};
