import React from "react";
import { Route, Switch } from "react-router-dom";
import * as routes from "./routes";

import Home from "../home/Home";
import Sorting from "../sorting/Sorting";

export const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path={routes.HOME} component={() => <Home />}></Route>
      <Route exact path={routes.SORTING} component={() => <Sorting />}></Route>
    </Switch>
  );
};

export default AppRoutes;
