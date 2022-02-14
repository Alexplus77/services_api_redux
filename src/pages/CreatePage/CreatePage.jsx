import React from "react";
import "./CreatePage.css";
const CreatePage = () => {
  return (
    <div className="container-create-page">
      <h1 className="title-create-page">Форма добавления услуги</h1>
      <form className="form-container">
        <div className="form-group">
          <label htmlFor="name">Название услуги</label>
          <input className="form-control" id="name" placeholder="Name" />
        </div>
        <div className="form-group">
          <label htmlFor="price">Цена</label>
          <input className="form-control" id="price" placeholder="Price" />
        </div>
        <div className="form-group">
          <label htmlFor="discount">Скидка(%)</label>
          <input
            className="form-control"
            id="discount"
            placeholder="Discount"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Ссылка на изображение</label>
          <input className="form-control" id="image" placeholder="Image" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export { CreatePage };
