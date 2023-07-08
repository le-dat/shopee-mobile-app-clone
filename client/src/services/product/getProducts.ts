import { ProductIProps } from "../../types/product";
import httpRequest from "../../utils/httpRequest";

interface IProps {
  products: ProductIProps[];
}

const getProducts = async () => {
  const response = await httpRequest.get<IProps>("/products");
  return response.data.products;
};

export default getProducts;
