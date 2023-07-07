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

export const API_URL = "https://shopee-mobile-app-clone-server.onrender.com";
