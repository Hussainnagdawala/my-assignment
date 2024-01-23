import { useState } from "react";
import reactLogo from "./assets/react.svg";
import {BrowserRouter as Router ,Routes ,Route} from "react-router-dom"
import viteLogo from "/vite.svg";
import "./App.css";
import Component from "./Component.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Add_procedure from "./components/Add_procedure.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/add" exact element={<Add_procedure/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
