const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: { type: String, max: 50, min: 10, required: true, unique: true },
    password: { type: String, required: true },
    likedItem: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    cart: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
