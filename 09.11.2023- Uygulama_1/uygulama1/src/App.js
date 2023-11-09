import logo from "./logo.svg";
import "./App.css";
import CrudModule from "./CrudModule";
import React from "react";
function App() {
  return (
    <div className="App">
      <div className="container text-center">
        <div className="row">

          <div className="col">
            <CrudModule />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
