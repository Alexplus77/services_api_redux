import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { exit_edit_mode } from "actions/createActions";

const ExitEditMode = ({ children }) => {
  const dispatch = useDispatch();
  const { editMode } = useSelector((state) => state.servicesListReducer);
  if (editMode) {
    dispatch(exit_edit_mode());
  }
  return children;
};
export default ExitEditMode;
