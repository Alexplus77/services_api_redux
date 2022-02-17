import { createStore, combineReducers, applyMiddleware } from "redux";
import { servicesAddValueReducer } from "reducers/servicesAddValueReducer";
import { servicesListReducer } from "reducers/servicesListReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
  servicesAddValueReducer: servicesAddValueReducer,
  servicesListReducer: servicesListReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export { store };
