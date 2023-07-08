const mongoose = require("mongoose");
const { Schema } = mongoose;
const slugify = require("slugify");
const mongooseDelete = require("mongoose-delete");

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: String,
    categories: [{ type: Schema.Types.ObjectId, ref: "Category" }], // Reference to the Category schema
    location: { type: String, required: true },
    images: { type: [String], required: true },
    sell_number: { type: Number, required: true },
    price: { type: Number, required: true },
    original_price: Number,
    colors: [
      {
        name: { type: String, required: true },
        enable: { type: Boolean, required: true },
      },
    ],
    sizes: [
      {
        name: { type: String, required: true },
        enable: { type: Boolean, required: true },
      },
    ],
    relative: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
  {
    timestamps: true,
  }
);

// Middleware function to automatically generate and set the slug based on the name before saving
productSchema.pre("save", function (next) {
  if (this.name) {
    this.slug = slugify(this.name, { lower: true });
  }
  next();
});

productSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

module.exports = mongoose.model("Product", productSchema);
