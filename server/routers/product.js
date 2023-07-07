const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/product");

router.get("/", ProductController.getAllProduct);
router.get("/search", ProductController.searchProductByName);
router.get("/filter", ProductController.filterProduct);
router.post("/", ProductController.createProduct);
router.post("/many", ProductController.createManyProduct);
router.put("/:id", ProductController.updateProductId);
router.delete("/:id", ProductController.updateProductId);

module.exports = router;
