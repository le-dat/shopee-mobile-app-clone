// Import the Category model
const Category = require("../models/category");
const Product = require("../models/product");

// Get all categories
const getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find()
      .populate({ path: "products", select: "-categories -__v" })
      .exec();

    return res.status(200).json({ categories });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Get a category by ID
const getCategoryById = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await Category.findById(categoryId);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    const products = await Product.find({
      categories: { $in: categoryId },
    })
      .select("-relative -categories")
      .exec();

    category.products = products;

    return res.status(200).json({ category });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

const searchCategoryByName = async (req, res) => {
  try {
    const searchQuery = req.query.name;
    const categories = await Category.find({
      name: { $regex: searchQuery, $options: "i" },
    });

    return res.status(200).json({ categories });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Create a category
const createCategory = async (req, res) => {
  try {
    const categoryData = req.body;
    console.log(categoryData);
    const category = new Category(categoryData);
    await category.save();
    return res.status(200).json({ category, message: "Create a category successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Create many categories
const createManyCategory = async (req, res) => {
  try {
    const categories = req.body; // Assuming an array of product objects is sent in the request body

    // Insert the array of categories into the Category collection
    const insertedCategories = await Category.insertMany(categories);

    return res.json({
      message: "Insert Categories added successfully",
      category: insertedCategories,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Update a category
const updateCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const categoryData = req.body;
    const category = await Category.findByIdAndUpdate(categoryId, categoryData, { new: true });
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).json({ category, message: "Update a category successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Delete a category
const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await Category.findByIdAndDelete(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).json({ message: "Delete a category successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getAllCategory,
  getCategoryById,
  searchCategoryByName,
  createCategory,
  createManyCategory,
  updateCategory,
  deleteCategory,
};
