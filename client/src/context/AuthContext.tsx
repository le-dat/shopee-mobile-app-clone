import React from "react";
import FontWrapper from "../components/wrapper/FontWrapper";

interface IProps {
  children: React.ReactNode;
}
const AuthContext: React.FC<IProps> = ({ children }) => {
  return <FontWrapper>{children}</FontWrapper>;
};

export default AuthContext;
