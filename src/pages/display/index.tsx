import React, {FC} from 'react'
import {Link, Outlet} from 'react-router-dom';

import {useRoutes} from "@/providers";

type TDisplayPageProps = {};



export const DisplayPage: FC<TDisplayPageProps> = ({}) => {
  const { subRoutes } = useRoutes();
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