import {
  SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE,
  ADD_SERVICE_VALUE,
  FETCH_SERVICE_ITEM,
  ON_EDIT_MODE,
  EXIT_EDIT_MODE,
  EXIT_ERROR,
  REMOVE_ITEM,
  SUCCESS_DELETE,
} from "./actionTypes";
import axios from "axios";

export const handleAddValue = (name, value) => ({
  type: ADD_SERVICE_VALUE,
  payload: { name, value },
});

export const fetch_services_request = () => ({
  type: SERVICES_REQUEST,
});

export const services_list_fetch = () => (dispatch, getState) => {
  dispatch(fetch_services_request);
  axios
    .get("http://localhost:8080/")
    .then(({ data }) => dispatch(fetch_services_success(data)))
    .catch((e) => {
      dispatch(fetch_services_failure(e.response));
    });
};
export const fetch_services_failure = (error) => ({
  type: FETCH_SERVICES_FAILURE,
  payload: { error },
});
export const fetch_services_success = (data) => ({
  type: FETCH_SERVICES_SUCCESS,
  payload: { data },
});
export const remove_item = (id) => ({
  type: REMOVE_ITEM,
  payload: id,
});
export const success_delete = () => ({
  type: SUCCESS_DELETE,
});
export const remove_service = (id) => (dispatch) => {
  dispatch(remove_item(id));
  axios
    .delete(`http://localhost:8080/${id}`)
    .then(() => dispatch(success_delete()))
    .catch((e) => dispatch(fetch_services_failure(e.response)));
};

export const submitService = (data) => (dispatch) => {
  dispatch(fetch_services_request);
  axios
    .post(`http://localhost:8080/create`, data)
    .then(({ data }) => fetch_services_success(data))
    .catch((e) => dispatch(fetch_services_failure(e.response)));
};

export const fetch_service_item = (data) => ({
  type: FETCH_SERVICE_ITEM,
  payload: { data },
});

export const handle_fetch_serviceItem = (id) => (dispatch) => {
  dispatch(fetch_services_request);
  axios
    .get(`http://localhost:8080/serviceItem/${id}`)
    .then(({ data }) => dispatch(fetch_service_item(data)))
    .catch((e) => dispatch(fetch_services_failure(e)));
};
export const on_edit_mode = (data) => ({
  type: ON_EDIT_MODE,
  payload: data,
});

export const exit_edit_mode = () => ({
  type: EXIT_EDIT_MODE,
});
export const exit_error = () => ({
  type: EXIT_ERROR,
});
