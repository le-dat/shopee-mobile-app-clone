import { ProductIProps } from "../../types/product";
import httpRequest from "../../utils/httpRequest";

interface ResponseIProps {
  products: ProductIProps[];
}
interface IProps {
  name: string;
  createdAt?: string;
  sell_number?: string;
  price?: string;
}

const filterProduct = async ({
  name = "",
  createdAt = "",
  sell_number = "",
  price = "",
}: IProps) => {
  const query = new URLSearchParams({ name, createdAt, sell_number, price });
  const response = await httpRequest.get<ResponseIProps>(`/products/filter?${query}`);
  console.log(`/products/filter?${query}`);
  return response.data.products;
};

export default filterProduct;
