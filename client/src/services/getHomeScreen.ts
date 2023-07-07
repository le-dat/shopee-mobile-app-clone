import getCategories from "./category/getCategories";
import getProducts from "./product/getProducts";
import getSliders from "./slider/getSliders";

const getHomeScreen = async () => {
  const data = await Promise.all([getSliders(), getCategories(), getProducts()]);
  return data;
};

export default getHomeScreen;
