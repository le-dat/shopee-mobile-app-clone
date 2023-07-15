const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/product");

router.get("/search", ProductController.searchProductByName);
router.get("/filter", ProductController.filterProduct);
router.get("/:id", ProductController.getProductById);
router.get("/", ProductController.getAllProduct);
router.post("/many", ProductController.createManyProduct);
router.post("/", ProductController.createProduct);
router.put("/:id", ProductController.updateProductId);
router.delete("/:id", ProductController.updateProductId);

module.exports = router;
