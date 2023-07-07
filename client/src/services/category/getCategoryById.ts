import { CategoryIProps } from "../../types/category";
import httpRequest from "../../utils/httpRequest";

const getCategoryById = async (id: string) => {
  const response = await httpRequest.get<CategoryIProps>(`/categories/${id}`);
  return response.data;
};

export default getCategoryById;
