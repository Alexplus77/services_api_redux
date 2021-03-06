import React from "react";
import "./Form.css";
import {
  handleAddValue,
  submitService,
  fetch_services_failure,
  exit_edit_mode,
} from "actions/createActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.servicesAddValueReducer);
  const { services, errors, editMode } = useSelector(
    (state) => state.servicesListReducer
  );
  const navigate = useNavigate();
  const errorMessage = { statusText: "Такая услуга уже существует" };
  const errorEmptyString = { statusText: "Вы не заполнили все поля" };

  const onChangeValue = ({ target }) => {
    dispatch(handleAddValue(target.name, target.value));
  };

  const onSubmitData = (e) => {
    e.preventDefault();
    const findItem = services.find(({ name }) => name === data.name);
    if (findItem && !editMode) {
      dispatch(fetch_services_failure(errorMessage));
    } else if (!data.name.trim() || !data.describe.trim()) {
      dispatch(fetch_services_failure(errorEmptyString));
    } else {
      dispatch(submitService(data));
      navigate("/");
    }
  };
  const handleExitEditMode = () => {
    dispatch(exit_edit_mode);
    navigate("/");
  };
  return (
    <div className="container-create-page">
      <form onSubmit={onSubmitData} className="form-container">
        <div className="form-group">
          <label htmlFor="name">Название услуги</label>
          <input
            onChange={onChangeValue}
            className="form-control"
            id="name"
            name="name"
            placeholder="Name"
            value={data.name}
            required
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
            value={data.price}
            required
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
            value={data.describe}
            required
          />
        </div>
        <div className="form-btn">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button onClick={handleExitEditMode} className="btn btn-primary">
            {editMode ? "Exit" : "Back"}
          </button>
        </div>
      </form>
    </div>
  );
};
export { Form };
