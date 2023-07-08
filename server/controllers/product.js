const Product = require("../models/product");

// Create a product
const createProduct = async (req, res) => {
  try {
    const productData = req.body;
    const product = new Product(productData);
    await product.save();
    res.status(200).json({ product, message: "Create a product successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Create many products
const createManyProduct = async (req, res) => {
  try {
    const products = req.body; // Assuming an array of product objects is sent in the request body

    // Insert the array of products into the Product collection
    const insertedProducts = await Product.insertMany(products);

    res.json({ message: "Products added successfully", products: insertedProducts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all products
const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find()
      .populate({
        path: "categories",
        select: "name _id",
      })
      .select("name location images sell_number price original_price categories")
      .exec();

    res.status(200).json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const relative = await Product.find({ _id: { $ne: productId } })
      .populate({
        path: "categories",
        select: "name _id",
      })
      .select("name location images sell_number price original_price categories")
      .exec();

    product.relative = relative;

    res.status(200).json({ product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update a product
const updateProductId = async (req, res) => {
  try {
    const productId = req.params.id;
    const productData = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(productId, productData, {
      new: true,
    });
    if (!updatedProduct) {
      return res.status(200).json({ message: "Product not found" });
    }
    res.status(200).json({ product: updatedProduct, message: "Update product successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a product
const deleteProductId = async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await Product.findByIdAndRemove(productId);
    if (!deletedProduct) {
      res.status(200).json({ message: "Product not found" });
    }
    res.status(200).json({ product: deletedProduct, message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const searchProductByName = async (req, res) => {
  try {
    const searchQuery = req.query.q;
    const products = await Product.find({
      name: { $regex: searchQuery, $options: "i" },
    });
    res.json({ status: true, products });
    res.status(200).json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// filter product
const filterProduct = async (req, res) => {
  try {
    const { categories, price, location } = req.query;

    // Create a filter object to build the MongoDB query
    const filter = {};

    // Add category filter if provided
    if (categories) {
      const categoryArray = categories.split(","); // Split the categories string into an array
      filter.categories = { $in: categoryArray }; // Match products with any of the provided categories
    }

    // Add price filter if provided
    if (price) {
      const priceRange = price.split("-"); // Split the price range string into an array
      const minPrice = parseInt(priceRange[0], 10); // Minimum price
      const maxPrice = parseInt(priceRange[1], 10); // Maximum price
      filter.price = { $gte: minPrice, $lte: maxPrice }; // Match products within the price range
    }

    // Add location filter if provided
    if (location) {
      filter.location = location;
    }

    const filteredProducts = await Product.find(filter);
    res.json({ status: true, products: filteredProducts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, msg: "Server error" });
  }
};

module.exports = {
  createProduct,
  createManyProduct,
  getAllProduct,
  getProductById,
  updateProductId,
  deleteProductId,
  searchProductByName,
  filterProduct,
};
