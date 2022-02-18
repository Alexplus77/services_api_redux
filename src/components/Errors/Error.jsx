import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { exit_error } from "actions/createActions";
import { Button } from "antd";
import "./Error.css";
const Error = () => {
  const dispatch = useDispatch();
  const { errors } = useSelector((state) => state.servicesListReducer);
  const handleExitError = () => {
    dispatch(exit_error());
  };
  return (
    <div className="errors-container">
      <div className="error-background" />
      <div className="error-content">
        <i className="error-text">Ошибка!!!</i>
        <i className="error-text"> {errors.statusText}</i>
        <Button
          onClick={handleExitError}
          type="primary"
          size="small"
          className="error-btn"
        >
          Ok
        </Button>
      </div>
    </div>
  );
};
export { Error };
