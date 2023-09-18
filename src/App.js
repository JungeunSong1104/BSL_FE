import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Root from "./Root";


function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
