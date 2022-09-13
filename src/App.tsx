import React from "react";
import "./App.css";
import Calculator from "./pages/Calculator/Calculator";
import Logo from "./shared/images/logo.png";
import Hearth from "./shared/images/hearth.png";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={Logo} />
        <h3>Assignment Calculator</h3>
      </div>
      <div className="main">
        <Calculator />
      </div>
      <div className="footer">
        Made with <img src={Hearth} /> by{" "}
        <a target="_blank" href="https://tonatiuhgomez.com/">
          tonatiuhgomez.com
        </a>{" "}
      </div>
    </div>
  );
}

export default App;
