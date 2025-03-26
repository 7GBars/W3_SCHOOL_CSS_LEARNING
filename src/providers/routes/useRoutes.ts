import {useContext} from "react";
import {useNavigate} from "react-router";
import {useLocation} from "react-router-dom";

import {RoutesContext, type TRoutesContext} from "./RoutesContext";



export const useRoutes = (): TRoutesContext => {
  const navigate = useNavigate();
  const location = useLocation();
  const navigationContext = useContext(RoutesContext);

  if (!navigationContext) {
    throw new Error('Для использования useRoutes необходимо обернуть компонент в RoutesProvider');
  }
  return navigationContext;
}