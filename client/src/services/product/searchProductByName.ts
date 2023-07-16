import { ProductIProps } from "../../types/product";
import httpRequest from "../../utils/httpRequest";

interface IProps {
  products: ProductIProps[];
}

const searchProductByName = async (name: string) => {
  const query = new URLSearchParams({ name });
  const response = await httpRequest.get<IProps>(`/products/search?${query}`);
  return response.data.products;
};

export default searchProductByName;
