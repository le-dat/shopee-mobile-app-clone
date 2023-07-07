import { ProductIProps } from "../../types/product";
import httpRequest from "../../utils/httpRequest";

const getProducts = async () => {
  const response = await httpRequest.get<ProductIProps[]>("/products");
  return response.data;
};

export default getProducts;
