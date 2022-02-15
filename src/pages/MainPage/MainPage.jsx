import React from "react";
import "./MainPage.css";
import { useSelector } from "react-redux";
import "antd/dist/antd.css";
import { Table } from "antd";
import { css } from "@emotion/css";
import { EditOutlined, DeleteTwoTone } from "@ant-design/icons";

const MainPage = () => {
  const { services, errors } = useSelector(
    (state) => state.servicesListReducer
  );
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 100,
      align: "center",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: 100,
      align: "center",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      width: 50,
      align: "center",
      render: () => {
        return (
          <div className="icons-edit-container">
            <EditOutlined className="icons" />
            <DeleteTwoTone className="icons" />
          </div>
        );
      },
    },
  ];
  const tableCSS = css({
    backgroundColor: "#c1c1f8",
    "& table": {
      borderCollapse: "collapse",
    },
    "& thead > tr > th": {
      backgroundColor: "#c1c1f8",
      color: "black",
      padding: 5,
    },
  });

  return (
    <div className="container-table">
      <h1>Список услуг</h1>
      {errors && <div>{errors.data}</div>}

      <Table
        className={tableCSS}
        dataSource={services}
        columns={columns}
        bordered={true}
      />
    </div>
  );
};
export { MainPage };
