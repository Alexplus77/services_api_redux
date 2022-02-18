import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { exit_error } from "actions/createActions";
import { Button } from "antd";
import "./Error.css";
const Error = () => {
  const dispatch = useDispatch();
  const { errors } = useSelector((state) => state.servicesListReducer);
  const block = useRef();
  useEffect(() => {
    document.addEventListener("click", clickOutBlock);
    return () => document.removeEventListener("click", clickOutBlock);
  }, []);
  const handleExitError = () => {
    dispatch(exit_error());
  };
  const clickOutBlock = (e) => {
    e.target !== block.current && handleExitError();
  };
  return (
    <div className="errors-container">
      <div className="error-background" />
      <div className="error-content" ref={block}>
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
