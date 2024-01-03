import { IconIProps } from "../types/common";

export const COLORS = {
  primary: "#ee4d2d",
  secondary: "#c0c2f4",
  text: "#222",
  white: "#fff",
  yellow: "#ffd424e6",
  green: "#26aa99",
  gray: "#e8e8e8",
  grayDark: "#929292",
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
  ...TABS,
  main: "Main",
  product: "Product",
  cart: "Cart",
  category: "Category",
  search: "Search",
  searchResult: "SearchResult",

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

export const ICON_MINUS: IconIProps = {
  name: "minus",
  type: "antdesign",
};

export const ICON_ADD: IconIProps = {
  name: "add-outline",
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

export const ICON_CLOSE: IconIProps = {
  name: "close-outline",
  type: "ionicon",
};

export const ICON_SUCCESS_CIRCLE: IconIProps = {
  name: "checkcircle",
  type: "antdesign",
};
export const ICON_ERROR_CIRCLE: IconIProps = {
  name: "closecircle",
  type: "antdesign",
};

export const ICON_WARNING_CIRCLE: IconIProps = {
  name: "warning",
  type: "entypo",
};

export const ICON_INFO_CIRCLE: IconIProps = {
  name: "infocirlce",
  type: "antdesign",
};

export const ICON_ARROW_DOWN: IconIProps = {
  name: "down",
  type: "antdesign",
};

export const ICON_ARROW_NEXT: IconIProps = {
  name: "navigate-next",
  type: "materialicons",
};

export const ICON_CAMERA: IconIProps = {
  name: "camerao",
  type: "antdesign",
};

export const ICON_FILTER: IconIProps = {
  name: "filter",
  type: "antdesign",
};

export const ICON_RANGE: IconIProps = {
  name: "arrow-v",
  type: "fontisto",
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

export const ICON_SORT = (asc: boolean): IconIProps => ({
  name: asc ? "arrowup" : "arrowdown",
  type: "antdesign",
});

export const IMAGES = {
  empty: require("../assets/images/empty.png"),
};
export const API_URL = "https://shopee-mobile-app-clone-server.onrender.com";

// not working on react native
// export const API_URL = "http://localhost:5000";
