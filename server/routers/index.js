const CategoryRouter = require("./category");
const SliderRouter = require("./slider");
const ProductRouter = require("./product");
const UserRouter = require("./user");

function router(app) {
  app.use("/api/sliders", SliderRouter);
  app.use("/api/categories", CategoryRouter);
  app.use("/api/products", ProductRouter);
  app.use("/api/users", UserRouter);

  // Page Error
  app.get("*", (req, res, next) => {
    res.send("Nhập sai đường dẫn! Vui lòng nhập lại >.<");
  });
}

module.exports = router;
