import { CategoryIProps } from "../../types/category";
import httpRequest from "../../utils/httpRequest";

interface IProps {
  categories: CategoryIProps[];
}

const getCategories = async () => {
  const response = await httpRequest.get<IProps>(`/categories`);
  return response.data.categories;
};

export default getCategories;
