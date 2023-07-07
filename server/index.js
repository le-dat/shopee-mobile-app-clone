require("dotenv").config();
const path = require("path");
const cors = require("cors");
const express = require("express");
const db = require("./config/db");
const router = require("./routers");

const port = process.env.PORT || 5000;
const app = express();

// Connect to the database
db.connect();

// Body Parser
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files (e.g., images)
app.use(express.static(path.join(__dirname, "public")));

// Page Home
app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

// router
router(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
