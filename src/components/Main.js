import React from "react";
import AnimalList from "./Animals/AnimalList";
import Home from "./Home";
import About from "./About";
import { BrowserRouter as Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <div className="main">
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/Animals" component={AnimalList} />
          <Route path="/About" component={About} />
        </Routes>
      </div>
    </main>
  );
};

export default Main;
