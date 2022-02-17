import {
  ADD_SERVICE_VALUE,
  ON_EDIT_MODE,
  FETCH_SERVICES_SUCCESS,
  EXIT_EDIT_MODE,
} from "actions/actionTypes";

const initialState = {
  name: "",
  price: "",
  describe: "",
};
const servicesAddValueReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SERVICE_VALUE:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case FETCH_SERVICES_SUCCESS:
      return { ...state, name: "", price: "", describe: "", id: "" };
    case EXIT_EDIT_MODE:
      return { ...state, name: "", price: "", describe: "", id: "" };
    case ON_EDIT_MODE:
      const data = action.payload;
      return { ...state, ...data };
    default:
      return state;
  }
};
export { servicesAddValueReducer };
