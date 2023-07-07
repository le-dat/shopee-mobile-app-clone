import { CategoryIProps } from "./category";

export interface ProductIProps {
  name: string;
  slug?: string;
  categories: CategoryIProps[];
  location: string;
  images: string[];
  sell_number: number;
  price: number;
  original_price: number;
  size: SizeIProps[];
  color: ColorIProps[];
}

export interface SizeIProps {
  name: string;
  enable: boolean;
}
export interface ColorIProps {
  name: string;
  enable: boolean;
}
