const express = require("express");
const router = express.Router();
const SliderController = require("../controllers/slider");

router.get("/:id", SliderController.getSliderById);
router.get("/", SliderController.getAllSlider);
router.post("/", SliderController.createSlider);
router.post("/many", SliderController.createManySlider);
router.put("/:id", SliderController.updateSlider);
router.delete("/:id", SliderController.deleteSlider);

module.exports = router;