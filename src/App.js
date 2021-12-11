import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Main />
      </Router>
    </div>
  );
};

export default App;
