import { SERVICE_SUBMIT, SERVICES_LIST_FETCH } from "./actionTypes";

export const service_submit = (name, value) => ({
  type: SERVICE_SUBMIT,
  payload: { name, value },
});

export const services_list_fetch = (data) => ({
  type: SERVICES_LIST_FETCH,
  payload: data,
});
