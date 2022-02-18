import { Routers } from "./routers";
import "./App.css";
import { useSelector } from "react-redux";
import { Error } from "components/Errors";

function App() {
  const { errors, loading } = useSelector((state) => state.servicesListReducer);
  console.log(errors);
  return (
    <div className="App">
      {errors && <Error />}
      <Routers />
    </div>
  );
}

export default App;
