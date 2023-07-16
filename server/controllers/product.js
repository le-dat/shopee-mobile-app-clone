const Product = require("../models/product");

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
    const product = await Product.findById(productId)
      .populate({
        path: "categories",
        select: "name _id",
      })
      .exec();

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const categoryIds = product.categories[0]; // Assuming only one category is assigned to the product

    const relative = await Product.find({
      _id: { $ne: productId },
      categories: { $in: categoryIds },
    })
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

const searchProductByName = async (req, res) => {
  try {
    const searchQuery = req.query.name;
    const products = await Product.find({
      name: { $regex: searchQuery, $options: "i" },
    });

    res.status(200).json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const filterProduct = async (req, res) => {
  try {
    const { name, price, createdAt, sell_number } = req.query;

    let products = await Product.find({
      name: { $regex: name, $options: "i" },
    });

    // price
    if (price === "asc") {
      products = products.sort((a, b) => a.price - b.price);
    }
    if (price === "desc") {
      products = products.sort((a, b) => b.price - a.price);
    }

    // createdAt
    if (createdAt === "asc") {
      products = products.sort((a, b) => a.createdAt - b.createdAt);
    }
    if (createdAt === "desc") {
      products = products.sort((a, b) => b.createdAt - a.createdAt);
    }

    // sell_number
    if (sell_number === "asc") {
      products = products.sort((a, b) => a.sell_number - b.sell_number);
    }
    if (sell_number === "desc") {
      products = products.sort((a, b) => b.sell_number - a.sell_number);
    }

    res.json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

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

module.exports = {
  getAllProduct,
  getProductById,
  searchProductByName,
  filterProduct,
  createProduct,
  createManyProduct,
  updateProductId,
  deleteProductId,
};
