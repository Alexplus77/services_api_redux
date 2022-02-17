import {
  SERVICES_REQUEST,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICE_ITEM,
} from "actions/actionTypes";

const initialState = {
  services: [],
  serviceItem: {},
  loading: false,
  errors: null,
};
const servicesListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVICES_SUCCESS:
      const { data } = action.payload;
      return { ...state, services: data, loading: false };
    case FETCH_SERVICES_FAILURE:
      const { error } = action.payload;
      return { ...state, errors: error, loading: false };
    case SERVICES_REQUEST:
      return { ...state, loading: true, errors: null };
    case FETCH_SERVICE_ITEM:
      const { data: dataItem } = action.payload;
      return { ...state, serviceItem: dataItem, loading: false, errors: null };
    default:
      return { ...state };
  }
};
export { servicesListReducer };
