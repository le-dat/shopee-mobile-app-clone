export interface IconIProps {
  name: string;
  type:
    | "antdesign"
    | "entypo"
    | "evilicon"
    | "feather"
    | "font-awesome"
    | "font-awesome-5"
    | "fontisto"
    | "foundation"
    | "ionicon"
    | "materialicons"
    | "material-community"
    | "octicon"
    | "simple-line-icon"
    | "zocial";
}

export interface DialogIProps {
  title: string;
  type: "ERROR" | "SUCCESS" | "WARNING" | "INFO";
}
