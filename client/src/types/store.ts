import { ProductIProps } from "./product";

export interface UUID_IProps {
  uuid: string | number[];
}

export interface ProductCartIProps extends UUID_IProps, ProductIProps {
  size: string;
  color: string;
  quantity: number;
  isChecked: boolean;
}
