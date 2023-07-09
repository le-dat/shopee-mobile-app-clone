import { CategoryIProps } from "./category";

export interface ProductIProps {
  _id: string;
  name: string;
  slug?: string;
  categories: CategoryIProps[];
  location: string;
  images: string[];
  sell_number: number;
  price: number;
  original_price: number;
  sizes: SharedIProps[];
  colors: SharedIProps[];
  relative: ProductIProps[];
}

export interface SharedIProps {
  name: string;
  enable: boolean;
}
