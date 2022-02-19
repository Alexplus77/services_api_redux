import { Routers } from "./routers";
import "./App.css";
import { useSelector } from "react-redux";
import { Error } from "components/Errors";

function App() {
  const { errors } = useSelector((state) => state.servicesListReducer);
  return (
    <div className="App">
      {errors && <Error />}
      <Routers />
    </div>
  );
}

export default App;
