import { CategoryIProps } from "../../types/category";
import httpRequest from "../../utils/httpRequest";

interface IProps {
  category: CategoryIProps;
}

const getCategoryById = async (id: string) => {
  const response = await httpRequest.get<IProps>(`/categories/${id}`);
  return response.data.category;
};

export default getCategoryById;
