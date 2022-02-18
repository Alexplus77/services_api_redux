import React from "react";
import { Spin } from "antd";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <Spin />
    </div>
  );
};
export { Loader };
