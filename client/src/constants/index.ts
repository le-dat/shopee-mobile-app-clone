import { IconIProps } from "../types/common";

export const COLORS = {
  primary: "#ee4d2d",
  secondary: "#d0011b",
  text: "#222",
  white: "#fff",
  yellow: "#ffd424e6",
  gray: "#929292",
  bgPrimary: "#f5f5f500",
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
export const LINKS = {
  home: "/Home",
  item: (id: string) => `/Item/${id}`,
  cart: "/Cart",

  message: "/Message",
  category: "/Category",
  account: "/Account",
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

export const STRAPI_API_TOKEN =
  "b72168c9e0b108292345aa1e42aa425ce8bf301dc0534d83305b593b0f251314dd21744ecc5a9c8f3b71308f07cc47fb722953dfdb080ec50c1b2bc1ebcdec55a157cfe2c6fe8161aae1aa472cceb4f2fe3abdd263694571426b9525aad21e5931ddca260007fa341fe7eba7eb6ba12f6e9fbaeb725b62f954e96a1a3fd2c995";
export const API_URL = "https://shoe-store-backend-05rp.onrender.com";

// export const STRAPI_API_TOKEN =
//   "14359afb148b98778e6dac9870984ccb598aa95a0d5d138c6c1e483a9b994429e69e999998e69969dd95880520ed054da2394a7459fc4fe45cccda0f0b191f30387bea72fbe50376b26207bcdbcb5604b62299eda80775d8beb7cf0e785879fbd73c6bd6d1c628fba922b5f1ace3978d877a4858b237123b985164eed75bdeff";
// export const API_URL = "http://127.0.0.1:1337/api";
