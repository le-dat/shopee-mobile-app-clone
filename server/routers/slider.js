const express = require("express");
const router = express.Router();
const SliderController = require("../controllers/slider");

router.get("/", SliderController.getSliders);
router.get("/:id", SliderController.getSliderById);
router.post("/", SliderController.createSlider);
router.post("/many", SliderController.createManySlider);
router.put("/:id", SliderController.updateSlider);
router.delete("/:id", SliderController.deleteSlider);

module.exports = router;
