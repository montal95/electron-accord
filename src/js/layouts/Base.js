import React from "react";
import { Navbar } from "../components";

const BaseLayout = ({ children, ...props }) => {
  return (
    <>
      <Navbar {...props} />
      {children}
    </>
  );
};

export default BaseLayout;
