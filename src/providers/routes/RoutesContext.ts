import React from "react";


export type TRoutesContext = {
  unitsLinks:  React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
  unitsRoutes:  React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
}
export const RoutesContext = React.createContext<TRoutesContext | null>(null);
