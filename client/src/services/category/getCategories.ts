import { CategoryIProps } from "../../types/product";
import httpRequest from "../../utils/httpRequest";

const getCategories = async () => {
  const response = await httpRequest.get<CategoryIProps[]>(`/categories`);
  return response.data;
};

export default getCategories;
