export interface StrapiIProps<T> {
  id: number;
  attributes: T;
}
export interface ResponseIProps<T> {
  data: StrapiIProps<T>;
}
export interface ResponseArrayIProps<T> {
  data: StrapiIProps<T>[];
}
export interface ItemIProps {
  name: string;
  price: number;
  original_price: number;
  sell_number: number;
  slug: string;
  description?: string;

  size: SizeIProps[];
  color: ResponseArrayIProps<ColorIProps>;
  thumbnail: ResponseIProps<ThumbnailIProps>;
  image: ResponseArrayIProps<ImageIProps>;
  categories: ResponseArrayIProps<CategoryIProps>;
  locations: ResponseArrayIProps<LocationIProps>;
}

export interface SizeIProps {
  name: string;
  enable: boolean;
}
export interface ColorIProps {
  name: string;
  enable: boolean;
}
export interface ImageIProps {
  name: string;
  url: string;
}
export interface ThumbnailIProps {
  name: string;
  url: string;
}
export interface CategoryIProps {
  name: string;
  slug: string;
  image: ResponseIProps<ImageIProps>;
}
export interface LocationIProps {
  name: string;
  slug: string;
}
