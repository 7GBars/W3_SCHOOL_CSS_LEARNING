import {useContext, useMemo} from "react";
import {useNavigate} from "react-router";
import {useLocation} from "react-router-dom";

import {units} from "@/routes";
import {Unit} from "@/models-view";

import {RoutesContext, type TRoutesContext} from "./RoutesContext";

type TUseRoutesContext = TRoutesContext & { subRoutes: Unit[] };

export const useRoutes = (): TUseRoutesContext => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const navigationContext = useContext(RoutesContext);

  const subRoutes = useMemo(() => {
    const segments = pathname.split("/");
    const basePath = segments.length > 1 ? `/${segments[1]}` : pathname;
    const unit = units.find((u) => u.path === basePath);
    const subRoutes = unit?.subRoutes || [];
    return subRoutes;
  }, [pathname]);




  if (!navigationContext) {
    throw new Error('Для использования useRoutes необходимо обернуть компонент в RoutesProvider');
  }
  return {
    unitsRoutes: navigationContext.unitsRoutes,
    unitsLinks: navigationContext.unitsLinks,
    subRoutes
  };
}