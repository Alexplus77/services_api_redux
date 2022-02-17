import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "components/NavBar";

const Layout = () => {
  return (
    <div className="container-page">
      <NavBar />
      <Outlet />
    </div>
  );
};
export { Layout };