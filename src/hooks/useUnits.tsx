import React, {ReactElement} from "react";
import {Link, Route} from "react-router-dom";

import {Card} from "../components";
import {Unit} from "../models-view";



export const useUnits = (units: Unit[]) => {
  const unitsLinks: ReactElement[] = [];
  const unitsRoutes: ReactElement[] = [];

  units.map(u => {
    unitsLinks.push(
      <Link key={u.id} to={u.path}>
        <Card id={u.id} title={u.title} description={u.description}/>
      </Link>
    );
    unitsRoutes.push(
      <Route path={u.path} Component={u.component as any} />
    );
  });

  return [unitsLinks, unitsRoutes];
}