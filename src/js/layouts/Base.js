import React, { Component } from "react";
import { Navbar } from "../components";

const BaseLayout = ({ children, ...props }) => {
  return (
    <>
      <Navbar {...props} />
      {children}
    </>
  );
};

const getDisplayName = (Component) =>
  Component.displayName || Component.name || "Component";

export const withBaseLayout = (Component, config) => (props) => {
  const viewName = getDisplayName(Component);
  console.log(viewName)
  return (
    <>
      <Navbar {...config} view={Component.name} />
      <Component {...props} />
    </>
  );
};

export default BaseLayout;
