import React, { useState } from "react"

import { RoutesContext } from "./RoutesContext";

import {useUnits} from "@/hooks";
import {Unit} from "@/models-view";


type TRoutesProviderProps = React.PropsWithChildren<{
  units: Unit[];
}>;

export const RoutesProvider = ({ children, units }: TRoutesProviderProps) => {
  // const [currentAppLinks, setCurrentAppLinks] = useState<Array<IRouteItem | IRouteDropList>>([]);
  const [unitsLinks, unitsRoutes] = useUnits(units);

  return <RoutesContext.Provider value={{
        unitsRoutes,
        unitsLinks
  }}>
    {children}
  </RoutesContext.Provider>
}