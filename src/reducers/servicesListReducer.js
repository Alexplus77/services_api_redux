import {
  SERVICES_REQUEST,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICE_ITEM,
  ON_EDIT_MODE,
  EXIT_EDIT_MODE,
} from "actions/actionTypes";

const initialState = {
  services: [],
  serviceItem: {},
  loading: false,
  errors: null,
  editMode: false,
};
const servicesListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVICES_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        services: data,
        loading: false,
        editMode: false,
        serviceItem: {},
      };
    case FETCH_SERVICES_FAILURE:
      const { error } = action.payload;
      return { ...state, errors: error, loading: false, editMode: false };
    case SERVICES_REQUEST:
      return { ...state, loading: true, errors: null };
    case FETCH_SERVICE_ITEM:
      const { data: dataItem } = action.payload;
      return { ...state, serviceItem: dataItem, loading: false, errors: null };
    case ON_EDIT_MODE:
      return { ...state, editMode: true };
    case EXIT_EDIT_MODE:
      return { ...state, editMode: false, serviceItem: {} };
    default:
      return { ...state };
  }
};
export { servicesListReducer };
