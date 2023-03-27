import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./Components/Login";
import Menu from "./Components/Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="Login">
        <Login />
      </div>
    </div>
  );
}

export default App;
