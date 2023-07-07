import { ProductIProps } from "./product";

export interface CategoryIProps {
  id: string;
  name: string;
  slug?: string;
  image: string;
  products: ProductIProps[];
}
