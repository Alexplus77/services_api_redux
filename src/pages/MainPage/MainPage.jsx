import React, { useEffect } from "react";
import "./MainPage.css";

import { Table } from "antd";
import { css } from "@emotion/css";
import { DeleteTwoTone } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { services_list_fetch, remove_service } from "actions/createActions";
import { Link } from "react-router-dom";

const MainPage = () => {
  const { services, loading, serviceItem } = useSelector(
    (state) => state.servicesListReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(services_list_fetch());
  }, [serviceItem.id]);

  const onDelete = (id) => dispatch(remove_service(id));

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 100,
      align: "center",
      render: (text, record) => (
        <Link to={`/serviceItem/${record.id}`}>{text}</Link>
      ),
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
      width: 20,
      key: "action",
      align: "center",
      render: (text, record) => {
        return (
          <div key={record.id} className="icons-edit-container">
            <DeleteTwoTone
              className="icons"
              onClick={() => onDelete(record.id)}
            />
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
      <Table
        className={tableCSS}
        dataSource={services}
        columns={columns}
        bordered={true}
        pagination={{ pageSize: 5 }}
        loading={loading}
        rowKey={(record) => record.id}
      />
    </div>
  );
};
export { MainPage };
