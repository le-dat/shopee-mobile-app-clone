const Slider = require("../models/slider");

// Create a slider
const createSlider = async (req, res) => {
  try {
    const sliderData = req.body;
    const slider = new Slider(sliderData);
    await slider.save();
    res.status(200).json({ slider, message: "Slider created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Create sliders
const createManySlider = async (req, res) => {
  try {
    const slidersData = req.body;
    const insertedSliders = await Slider.insertMany(slidersData);
    res.status(200).json({ sliders: insertedSliders, message: "Sliders created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all sliders
const getAllSlider = async (req, res) => {
  try {
    const sliders = await Slider.find();
    res.status(200).json({ sliders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get a slider by ID
const getSliderById = async (req, res) => {
  try {
    const sliderId = req.params.id;
    const slider = await Slider.findById(sliderId);
    if (!slider) {
      return res.status(404).json({ message: "Slider not found" });
    }
    res.status(200).json({ slider });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update a slider
const updateSlider = async (req, res) => {
  try {
    const sliderId = req.params.id;
    const sliderData = req.body;
    const slider = await Slider.findByIdAndUpdate(sliderId, sliderData, { new: true });
    if (!slider) {
      return res.status(404).json({ message: "Slider not found" });
    }
    res.status(200).json({ slider, message: "Slider updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a slider
const deleteSlider = async (req, res) => {
  try {
    const sliderId = req.params.id;
    const slider = await Slider.findByIdAndDelete(sliderId);
    if (!slider) {
      return res.status(404).json({ message: "Slider not found" });
    }
    res.status(200).json({ message: "Slider deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createSlider,
  createManySlider,
  getAllSlider,
  getSliderById,
  updateSlider,
  deleteSlider,
};
