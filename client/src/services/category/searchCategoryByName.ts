import { CategoryIProps } from "../../types/category";
import httpRequest from "../../utils/httpRequest";

interface IProps {
  products: CategoryIProps[];
}

const searchCategoryByName = async (name: string) => {
  const response = await httpRequest.get<IProps>(`/categories/search?name=${name}`);
  return response.data.products;
};

export default searchCategoryByName;
