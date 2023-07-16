import { CategoryIProps } from "../../types/category";
import httpRequest from "../../utils/httpRequest";

interface IProps {
  categories: CategoryIProps[];
}

const searchCategoryByName = async (name: string) => {
  const query = new URLSearchParams({ name });
  const response = await httpRequest.get<IProps>(`/categories/search?${query}`);
  return response.data.categories;
};

export default searchCategoryByName;
