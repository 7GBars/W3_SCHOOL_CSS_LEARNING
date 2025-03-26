import React, {ReactElement} from "react";
import {Link, Route} from "react-router-dom";

import {Card} from "../components";
import {Unit} from "../models-view";


const renderRoutes = (routes: Unit[]): ReactElement[] => {
  return routes.map((route) => (
    <Route key={route.id} path={route.path} element={<route.component />}>
      {route.subRoutes && renderRoutes(route.subRoutes)}
    </Route>
  ));
};

export const useUnits = (units: Unit[]) => {
  const unitsLinks: ReactElement[] = [];
  const unitsRoutes: ReactElement[] = renderRoutes(units);


  units.forEach((u) => {
    unitsLinks.push(
      <Link key={u.id} to={u.path}>
        <Card id={u.id} title={u.title} description={u.description} />
      </Link>
    );
  });


  return [unitsLinks, unitsRoutes];
}