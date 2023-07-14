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
  sizes: OptionIProps[];
  colors: OptionIProps[];
  relative: ProductIProps[];
}

export interface OptionIProps {
  name: string;
  enable: boolean;
}
