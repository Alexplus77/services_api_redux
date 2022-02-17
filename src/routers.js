import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "pages/Layout";
import { MainPage } from "pages/MainPage";
import { CreatePage } from "pages/CreatePage";
import { ServiceItem } from "pages/ServiceItem";

const Routers = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={"/create"} element={<CreatePage />} />
        <Route path={"/serviceItem/:id"} element={<ServiceItem />} />
      </Route>
    </Routes>
  );
};
export { Routers };
