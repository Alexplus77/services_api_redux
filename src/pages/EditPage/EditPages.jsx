import React from "react";
import "./EditPage.css";
import { Form } from "components/Form";

const EditPage = () => {
  return (
    <div className="container-edit-page">
      <h1 className="title-edit-page">Форма редактирования услуги</h1>
      <Form />
    </div>
  );
};
export { EditPage };
