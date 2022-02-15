import { createStore, combineReducers } from "redux";
import { servicesAddValueReducer } from "reducers/servicesAddValueReducer";
import { servicesListReducer } from "reducers/servicesListReducer";

const reducer = combineReducers({
  servicesAddValueReducer: servicesAddValueReducer,
  servicesListReducer: servicesListReducer,
});

const store = createStore(reducer);

export { store };
