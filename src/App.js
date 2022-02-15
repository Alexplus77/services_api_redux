import { Routers } from "./routers";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { services_list_fetch } from "actions/createActions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then(({ data }) => dispatch(services_list_fetch({ dataList: data })))
      .catch((e) => {
        dispatch(services_list_fetch({ errors: e.response }));
      });
  }, []);
  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;
