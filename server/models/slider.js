const mongoose = require("mongoose");
const { Schema } = mongoose;

const sliderSchema = new Schema(
  {
    image: { type: String, required: true },
    url: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("slider", sliderSchema);
