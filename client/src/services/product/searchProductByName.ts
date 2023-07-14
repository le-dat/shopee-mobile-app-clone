import { ProductIProps } from "../../types/product";
import httpRequest from "../../utils/httpRequest";

interface IProps {
  products: ProductIProps[];
}

const searchProductByName = async (name: string) => {
  const response = await httpRequest.get<IProps>(`/products/search?name=${name}`);
  return response.data.products;
};

export default searchProductByName;
