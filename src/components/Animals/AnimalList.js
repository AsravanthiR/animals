import React from "react";
import { animals } from "./animals";
import AnimalCard from "./AnimalCard";
import {
  BrowserRouter as Router,
  Switch,
  useRouteMatch,
  Route,
} from "react-router-dom";
import AnimalSingle from "./AnimalSingle";

const AnimalList = () => {
  const match = useRouteMatch();

  const animallisting = animals.map((animal) => (
    <AnimalCard key={animal.name} name={animal.name} />
  ));

  return (
    <div className="animalList">
      <Router>
        <Switch>
          <Route exact path={match.path}>
            {animallisting}
          </Route>
          <Route path={`${match.path}/:animal`}>
            <AnimalSingle />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default AnimalList;
