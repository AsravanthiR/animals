import React, { Component } from "react";

import { animals } from "./animals";
import AnimalCard from "./AnimalCard";
import { Switch, Route } from "react-router-dom";
import AnimalSingle from "./AnimalSingle";
class AnimalList extends Component {
  state = {
    searchInput: "",
  };
  searchInputHandler = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
    console.log(this.state.searchInput);
  };
  animalsListing = animals.map((item) => (
    <AnimalCard key={item.name} name={item.name} />
  ));

  render() {
    const animalFilter = animals.filter((animal) => {
      return animal.name
        .toLowerCase()
        .includes(this.state.searchInput.toLowerCase());
    });
    console.log(this.props.match.path);
    const animalsListing = animalFilter.map((item) => (
      <AnimalCard key={item.name} name={item.name} />
    ));
    return (
      <div className="animallist">
        <Switch>
          <Route exact path={this.props.match.path}>
            <div className="searchInput">
              <h2>Search: </h2>
              <input type="text" onChange={this.searchInputHandler}></input>
            </div>
            {animalsListing}
          </Route>
          <Route path={`${this.props.match.path}/:animal`}>
            <AnimalSingle />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default AnimalList;
