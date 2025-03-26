import React, {FC, useMemo} from 'react'
import {Link, Outlet, useLocation} from 'react-router-dom';

import {ContentsContainer} from "../../units";
import {units} from "../../routes";

type TDisplayPageProps = {};

export function useSubRoutes(): any[] {
  const { pathname } = useLocation();

  // Определяем базовый путь: берем первый сегмент из pathname.
  // Например, если pathname === "/display/grid", базовый путь будет "/display"
  const basePath = useMemo(() => {
    const segments = pathname.split("/");
    return segments.length > 1 ? `/${segments[1]}` : pathname;
  }, [pathname]);

  // Ищем единицу, у которой basePath совпадает с unit.path
  const unit = units.find((u) => u.path === basePath);

  // Возвращаем вложенные маршруты или пустой массив
  return unit?.subRoutes || [];
}

export const DisplayPage: FC<TDisplayPageProps> = ({}) => {
  const subRoutes = useSubRoutes();
  debugger
  return (
    <div className={'page_container'}>
      {subRoutes.map((sub) => (
        <Link key={sub.path} to={sub.path} style={{ marginRight: "10px" }}>
          {sub.title || sub.path}
        </Link>
      ))}
      <Outlet />
    </div>
  );
};

export * from './grid'