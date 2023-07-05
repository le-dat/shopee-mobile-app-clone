export interface ResponseIProps<T> {
  data: {
    id: string;
    attributes: T;
  }[];
}

export interface ItemIProps {
  name: string;
  price: number;
  originPrice: number;
  sell_number: number;
  slug: string;
  description?: string;

  color: ResponseIProps<ColorIProps>;
  thumbnail: ResponseIProps<ThumbnailIProps>;
  images: ResponseIProps<ImageIProps>;
  categories: ResponseIProps<CategoryIProps>;
  locations: ResponseIProps<LocationIProps>;
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
