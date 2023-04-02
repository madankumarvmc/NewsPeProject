import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./Components/Login";
import Menu from "./Components/Menu";
import {Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import History from "./Components/History";
import ForgotPassword from "./Components/ForgotPassword";

function App() {
  return (
    <>
      <Menu />
      <Routes>
      {/* <Route path="" element = {<Home />} /> */}
        <Route path="login" element = {<Login />} />
        <Route path="" element = {<Home />} />
        <Route path="aboutus" element = {<AboutUs />} />
        <Route path="history" element = {<History />} />
        <Route path="forgot-password" element = {<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;
