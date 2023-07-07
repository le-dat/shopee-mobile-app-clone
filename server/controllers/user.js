const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Product = require("../models/product");

// User registration
const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email already exists
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(200).json({ msg: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      email,
      password: hashedPassword,
      likedItem: [],
      cart: [],
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    res.status(200).json({ msg: "User registered successfully", user: savedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// User login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(200).json({ msg: "Invalid email or password" });
    }

    // Compare the provided password with the hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(200).json({ msg: "Invalid email or password" });
    }

    // Generate a JSON Web Token (JWT)
    const token = jwt.sign({ userId: user._id }, "secretKey");

    res.status(200).json({ msg: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// Add a product to liked items
const addLikedProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const userId = req.user.userId;

    // Check if the product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(200).json({ msg: "Product not found" });
    }

    // Update the user's likedItem array
    await User.findByIdAndUpdate(userId, { $addToSet: { likedItem: productId } });

    res.status(200).json({ msg: "Product added to liked items" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// Add a product to the cart
const addToCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const userId = req.user.userId;

    // Check if the product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(200).json({ msg: "Product not found" });
    }

    // Update the user's cart array
    await User.findByIdAndUpdate(userId, { $addToSet: { cart: productId } });

    res.status(200).json({ msg: "Product added to cart" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// Get liked products
const getLikedProducts = async (req, res) => {
  try {
    const userId = req.user.userId;

    // Get the user's likedItem array populated with the actual product documents
    const user = await User.findById(userId).populate("likedItem");

    res.status(200).json({ likedProducts: user.likedItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// Get the cart
const getCart = async (req, res) => {
  try {
    const userId = req.user.userId;

    // Get the user's cart array populated with the actual product documents
    const user = await User.findById(userId).populate("cart");

    res.status(200).json({ cart: user.cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// Remove a product from liked items
const removeLikedProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const userId = req.user.userId;

    // Update the user's likedItem array to remove the specified product ID
    await User.findByIdAndUpdate(userId, { $pull: { likedItem: productId } });

    res.status(200).json({ msg: "Product removed from liked items" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// Remove a product from the cart
const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;
    const userId = req.user.userId;

    // Update the user's cart array to remove the specified product ID
    await User.findByIdAndUpdate(userId, { $pull: { cart: productId } });

    res.status(200).json({ msg: "Product removed from cart" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = {
  registerUser,
  loginUser,
  addLikedProduct,
  addToCart,
  getLikedProducts,
  getCart,
  removeLikedProduct,
  removeFromCart,
};
