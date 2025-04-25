import React, {FC} from 'react'
import {NavLink, Outlet} from 'react-router-dom';

import {useRoutes} from "@/providers";

import './index.scss';
import {classNames} from "@/helpers";


type TDisplayPageProps = {};

export const DisplayPage: FC<TDisplayPageProps> = ({}) => {
  const { subRoutes } = useRoutes();

  return (
    <div className={'display-page_container'}>
      <div className={'links-container'}>
        {subRoutes.map((sub) => (
          <NavLink
            key={sub.path}
            to={sub.path}
            className={({isActive}) => {
              const cls = classNames('display-page-link', {
                'display-page-link--active': isActive
              }, [])
              return cls;
            }}
          >
            {sub.title || sub.path}
          </NavLink>
        ))}
      </div>
      <div className={'content-container'}>
        <Outlet />
      </div>
    </div>
  );
};

export * from './grid'
export * from './displayContents'