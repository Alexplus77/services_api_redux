import { ADD_SERVICE_VALUE } from "actions/actionTypes";

const initialState = {
  name: "",
  price: "",
};
const servicesAddValueReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SERVICE_VALUE:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    default:
      return state;
  }
};
export { servicesAddValueReducer };
