import React, { useEffect } from "react";
import "./CreatePage.css";
import { Form } from "components/Form";
import { services_list_fetch } from "actions/createActions";
import { useDispatch, useSelector } from "react-redux";

const CreatePage = () => {
  const { services } = useSelector((state) => state.servicesListReducer);
  const dispatch = useDispatch();

  return (
    <div className="container-create-page">
      <h1 className="title-create-page">Форма добавления услуги</h1>
      <Form />
    </div>
  );
};
export { CreatePage };
