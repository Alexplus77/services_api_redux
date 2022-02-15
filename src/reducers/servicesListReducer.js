import { SERVICES_LIST_FETCH } from "actions/actionTypes";

const initialState = {
  services: [],
  errors: null,
};
const servicesListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SERVICES_LIST_FETCH:
      const data = action.payload;
      if (data.errors) {
        return { ...state, errors: data.errors };
      } else {
        return { ...state, services: data.dataList };
      }
    default:
      return { ...state };
  }
};
export { servicesListReducer };
