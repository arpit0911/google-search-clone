import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";
import RoutesRouter from "./router/RoutesRouter";
function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
