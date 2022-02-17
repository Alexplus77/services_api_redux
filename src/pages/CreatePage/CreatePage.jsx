import React from "react";
import "./CreatePage.css";
import {
  handleAddValue,
  submitService,
  fetch_services_failure,
} from "actions/createActions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const CreatePage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.servicesAddValueReducer);
  const { services, errors } = useSelector(
    (state) => state.servicesListReducer
  );
  const navigate = useNavigate();
  const errorMessage = "Такая услуга уже существует";

  const onChangeValue = ({ target }) => {
    dispatch(handleAddValue(target.name, target.value));
  };

  const onSubmitData = (e) => {
    e.preventDefault();
    const findItem = services.find(({ name }) => name === data.name);
    if (findItem) {
      dispatch(fetch_services_failure(errorMessage));
    } else {
      dispatch(submitService(data));
      navigate("/");
    }
  };
  return (
    <div className="container-create-page">
      <h1 className="title-create-page">Форма добавления услуги</h1>
      <form onSubmit={onSubmitData} className="form-container">
        <div className="form-group">
          <label htmlFor="name">Название услуги</label>
          <input
            onChange={onChangeValue}
            className="form-control"
            id="name"
            name="name"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Цена</label>
          <input
            type="number"
            onChange={onChangeValue}
            className="form-control"
            id="price"
            name="price"
            placeholder="Price"
          />
        </div>
        <div className="form-group">
          <label htmlFor="describe">Описание</label>
          <textarea
            onChange={onChangeValue}
            className="form-control"
            id="describe"
            name="describe"
            placeholder="describe"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export { CreatePage };
