const mongoose = require("mongoose");
const { Schema } = mongoose;
const slugify = require("slugify");
const mongooseDelete = require("mongoose-delete");

const categorySchema = new Schema(
  {
    name: { type: String, required: true },
    slug: String,
    image: String,
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }], // Reference to the Product schema
  },
  {
    timestamps: true,
  }
);

// Middleware function to automatically generate and set the slug based on the name before saving
categorySchema.pre("save", function (next) {
  if (this.name) {
    this.slug = slugify(this.name, { lower: true });
  }
  next();
});

categorySchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

module.exports = mongoose.model("Category", categorySchema);
