const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user");

// User registration
router.post("/register", UserController.registerUser);

// User login
router.post("/login", UserController.loginUser);

// Add a product to liked items
router.post("/liked-products", UserController.addLikedProduct);

// Add a product to the cart
router.post("/cart", UserController.addToCart);

// Get liked products
router.get("/liked-products", UserController.getLikedProducts);

// Get the cart
router.get("/cart", UserController.getCart);

// Remove a product from liked items
router.delete("/liked-products/:productId", UserController.removeLikedProduct);

// Remove a product from the cart
router.delete("/cart/:productId", UserController.removeFromCart);

module.exports = router;
