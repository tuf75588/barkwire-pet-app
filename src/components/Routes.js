import React from "react";
import { Switch, Link, Route } from "react-router-dom";

import DogsPage from "../Containers/DogsPage";
import DogPage from "../Containers/DogPage";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={DogsPage} />
      <Route exact path="/dogs/:id" component={DogPage} />
      <Route render={() => <h1>Page Not Found</h1>} />
    </Switch>
  );
};

export default Routes;
