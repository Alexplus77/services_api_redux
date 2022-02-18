import React, { useEffect } from "react";
import "./CreatePage.css";
import { Form } from "components/Form";
import ExitEditMode from "hocs/ExitEditMode";

const CreatePage = () => {
  return (
    <div className="container-create-page">
      <h1 className="title-create-page">Форма добавления услуги</h1>
      <ExitEditMode>
        <Form />
      </ExitEditMode>
    </div>
  );
};
export { CreatePage };
