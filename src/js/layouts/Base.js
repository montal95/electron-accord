import React, { Component } from "react";
import { Navbar } from "../components";

export const BaseLayout = ({ children, ...props }) => {
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
  return (
    <>
      <Navbar {...config} view={viewName} />
      <Component {...props} />
    </>
  );
};
