import React, { useEffect } from "react";
import { Card, Button } from "antd";
import "./ServicesItem.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { handle_fetch_serviceItem } from "actions/createActions";

const ServiceItem = () => {
  const { serviceItem, errors } = useSelector(
    (state) => state.servicesListReducer
  );
  const dispatch = useDispatch();
  const { name, price, describe } = serviceItem;
  const { id } = useParams();
  useEffect(() => {
    dispatch(handle_fetch_serviceItem(id));
  }, []);
  return (
    <div className="site-card-border-less-wrapper">
      <Card title={name} bordered={false} style={{ width: 400 }}>
        <p>Наименование: {name}</p>
        <p>Стоимость: {price} руб.</p>
        <p>Описание: {describe}</p>
        <div className="card_btn">
          <Button type="primary">Primary Button</Button>
          <Button type="primary">Primary Button</Button>
        </div>
      </Card>
    </div>
  );
};
export { ServiceItem };
