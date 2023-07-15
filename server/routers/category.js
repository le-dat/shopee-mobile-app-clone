const express = require("express");
const router = express.Router();

const CategoryController = require("../controllers/category");

router.get("/search", CategoryController.searchCategoryByName);
router.get("/:id", CategoryController.getCategoryById);
router.get("/", CategoryController.getAllCategory);
router.post("/many", CategoryController.createManyCategory);
router.post("/", CategoryController.createCategory);
router.put("/:id", CategoryController.updateCategory);
router.delete("/:id", CategoryController.deleteCategory);

module.exports = router;
