import { ItemIProps, ResponseIProps } from "../types/data";
import httpRequest from "../utils/httpRequest";

const getProducts = async (): Promise<ResponseIProps<ItemIProps>> => {
  const response = await httpRequest.get(`/products?populate=*`);
  console.log(response.data.data);
  return response.data.data;
};

export default getProducts;
