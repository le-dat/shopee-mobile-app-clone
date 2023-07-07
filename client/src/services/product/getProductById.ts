import { ProductIProps } from "../../types/product";
import httpRequest from "../../utils/httpRequest";

const getProductById = async (id: string) => {
  const response = await httpRequest.get<ProductIProps>(`/products/${id}`);
  return response.data;
};

export default getProductById;
