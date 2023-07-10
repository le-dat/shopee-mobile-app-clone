import { ProductIProps } from "./product";

export interface CategoryIProps {
  _id: string;
  name: string;
  slug?: string;
  image: string;
  products: ProductIProps[] | [];
}
