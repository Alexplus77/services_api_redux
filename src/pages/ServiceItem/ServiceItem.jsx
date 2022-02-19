import React, { useEffect } from "react";
import { Card, Button } from "antd";
import { CloseSquareOutlined } from "@ant-design/icons";
import "./ServicesItem.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  handle_fetch_serviceItem,
  remove_service,
  on_edit_mode,
} from "actions/createActions";

const ServiceItem = () => {
  const { serviceItem, errors } = useSelector(
    (state) => state.servicesListReducer
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name, price, describe } = serviceItem;
  const { id } = useParams();

  useEffect(() => {
    dispatch(handle_fetch_serviceItem(id));
  }, []);

  const onEditItem = () => {
    dispatch(on_edit_mode(serviceItem));
  };
  const exit = () => {
    navigate("/");
  };

  const onDelete = (id) => dispatch(remove_service(id));
  return (
    <div className="site-card-border-less-wrapper">
      <CloseSquareOutlined
        onClick={exit}
        style={{ color: "red" }}
        className="close-icon"
      />
      <Card title={name} bordered={false} style={{ width: 300 }}>
        <p>Наименование: {name}</p>
        <p>Стоимость: {price} руб.</p>
        <p>Описание: {describe}</p>
        <div className="card_btn">
          <Button type="primary" onClick={onEditItem}>
            <Link to="/edit">Edit</Link>
          </Button>
          <Button type="primary">
            <Link to="/">Exit</Link>
          </Button>
          <Button onClick={() => onDelete(id)} type="primary" danger>
            <Link to="/">Delete</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
};
export { ServiceItem };
