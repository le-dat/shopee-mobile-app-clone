// Import the Category model
const Category = require("../models/category");

// Create a category
const createCategory = async (req, res) => {
  try {
    const categoryData = req.body;
    console.log(categoryData);
    const category = new Category(categoryData);
    await category.save();
    res.status(200).json({ category, message: "Create a category successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Create many categories
const createManyCategory = async (req, res) => {
  try {
    const categories = req.body; // Assuming an array of product objects is sent in the request body

    // Insert the array of categories into the Category collection
    const insertedCategories = await Category.insertMany(categories);

    res.json({ message: "Insert Categories added successfully", category: insertedCategories });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all categories
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ categories });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
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
    res.status(200).json({ category });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
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
    res.status(200).json({ category, message: "Update a category successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
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
    res.status(200).json({ message: "Delete a category successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createCategory,
  createManyCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
