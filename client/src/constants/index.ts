import { IconIProps } from "../types/common";

export const COLORS = {
  primary: "#ee4d2d",
  secondary: "#d0011b",
  text: "#222",
  white: "#fff",
  yellow: "#ffd424e6",
  gray: "#929292",
  bgPrimary: "#f5f5f500",
  bgCategory: "#0046ab",
};

export const FONTS = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

export const TABS = {
  home: "Home",
  mail: "Mail",
  live: "Live",
  notify: "Thông báo",
  personal: "Tôi",
};
export const ROUTES = {
  home: "Home",
  item: "Item",
  cart: "Cart",
  category: "Category",

  message: "Messenger",
  personal: "Personal",
};
export const ICON_SEARCH: IconIProps = {
  name: "search1",
  type: "antdesign",
};

export const ICON_CART: IconIProps = {
  name: "shoppingcart",
  type: "antdesign",
};

export const ICON_MESSAGE: IconIProps = {
  name: "message1",
  type: "antdesign",
};

export const ICON_BACK: IconIProps = {
  name: "arrow-back",
  type: "ionicon",
};

export const ICON_DOTS_THREE_VERTICAL: IconIProps = {
  name: "dots-three-vertical",
  type: "entypo",
};

export const ICON_SHARE: IconIProps = {
  name: "share-outline",
  type: "material-community",
};
export const ICON_LIVE: IconIProps = {
  name: "live-tv",
  type: "materialicons",
};
export const ICON_HEART = (active: boolean): IconIProps => ({
  name: active ? "heart" : "hearto",
  type: "antdesign",
});

export const ICON_HOME = (active: boolean): IconIProps => ({
  name: active ? "home" : "home-outline",
  type: "ionicon",
});

export const ICON_MAIL = (active: boolean): IconIProps => ({
  name: active ? "mail" : "mail-outline",
  type: "ionicon",
});

export const ICON_NOTIFY = (active: boolean): IconIProps => ({
  name: active ? "bell" : "bell-o",
  type: "font-awesome",
});
export const ICON_PERSONAL = (active: boolean): IconIProps => ({
  name: active ? "person" : "person-outline",
  type: "ionicon",
});

export const IMAGE_SWIPER = [
  {
    id: "1",
    image: require("../assets/images_swiper/image1.jpg"),
  },
  {
    id: "2",
    image: require("../assets/images_swiper/image2.jpg"),
  },
  {
    id: "3",
    image: require("../assets/images_swiper/image3.jpg"),
  },
  {
    id: "4",
    image: require("../assets/images_swiper/image4.jpg"),
  },
];

export const STRAPI_API_TOKEN =
  "b72168c9e0b108292345aa1e42aa425ce8bf301dc0534d83305b593b0f251314dd21744ecc5a9c8f3b71308f07cc47fb722953dfdb080ec50c1b2bc1ebcdec55a157cfe2c6fe8161aae1aa472cceb4f2fe3abdd263694571426b9525aad21e5931ddca260007fa341fe7eba7eb6ba12f6e9fbaeb725b62f954e96a1a3fd2c995";
export const API_URL = "https://shoe-store-backend-05rp.onrender.com";
