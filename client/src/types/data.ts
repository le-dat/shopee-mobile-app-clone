export interface ResponseIProps<T> {
  data: {
    id: string;
    attributes: T;
  };
}
export interface ResponseArrayIProps<T> {
  data: {
    id: string;
    attributes: T;
  }[];
}
export interface ItemIProps {
  name: string;
  price: number;
  original_price: number;
  sell_number: number;
  slug: string;
  description?: string;

  color: ResponseArrayIProps<ColorIProps>;
  thumbnail: ResponseIProps<ThumbnailIProps>;
  images: ResponseArrayIProps<ImageIProps>;
  categories: ResponseArrayIProps<CategoryIProps>;
  locations: ResponseArrayIProps<LocationIProps>;
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
}
export interface LocationIProps {
  name: string;
  slug: string;
}
