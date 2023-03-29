import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./Components/Login";
import Menu from "./Components/Menu";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="login" element = {<Login />} />
      </Routes>
    </>
  );
}

export default App;
