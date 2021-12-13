import React from "react";
import AnimalList from "./Animals/AnimalList";
import Home from "./Home";
import About from "./About";
import { Switch, Route } from "react-router-dom";
const Main = () => {
  return (
    <main>
      <div className="main">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/animals" component={AnimalList} />
          <Route path="/About" component={About} />
        </Switch>
      </div>
    </main>
  );
};

export default Main;
