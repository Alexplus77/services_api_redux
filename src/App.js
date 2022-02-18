import { Routers } from "./routers";
import "./App.css";
import { useSelector } from "react-redux";
import { Error } from "components/Errors";
import { Loader } from "components/Loader";

function App() {
  const { errors, loading } = useSelector((state) => state.servicesListReducer);

  return (
    <div className="App">
      {loading && <Loader />}
      {errors && <Error />}
      <Routers />
    </div>
  );
}

export default App;
