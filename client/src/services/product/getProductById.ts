import { ProductIProps } from "../../types/product";
import httpRequest from "../../utils/httpRequest";

interface IProps {
  product: ProductIProps;
}
const getProductById = async (id: string) => {
  const response = await httpRequest.get<IProps>(`/products/${id}`);
  return response.data.product;
};

export default getProductById;
