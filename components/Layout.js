import React from "react";
import HeaderInfo from "./HeaderInfo";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <HeaderInfo />
      <Nav />
      {children}
    </>
  );
};

export default Layout;
