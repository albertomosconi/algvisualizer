import React from "react";
import { Route, Switch } from "react-router-dom";
import * as routes from "./routes";

import Home from "../home/Home";
import Sorting from "../sorting/Sorting";
import Automata from "../automata/Automata";
import Pathfinding from "../pathfinding/Pathfinding";

export const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path={routes.HOME} component={() => <Home />} />
      <Route exact path={routes.SORTING} component={() => <Sorting />} />
      <Route exact path={routes.AUTOMATA} component={() => <Automata />} />
      <Route
        exact
        path={routes.PATHFINDING}
        component={() => <Pathfinding />}
      />
    </Switch>
  );
};

export default AppRoutes;
