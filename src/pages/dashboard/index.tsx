import React, {FC, ReactNode, useMemo, useState} from 'react'
import {DashBoardTable} from "../../components";
import { dashBoardData } from "../../__mocks__";
import type { CompanyData, IColumn, Issue } from "../../models-view";

import './index.scss';

type TDashboardProps = {};

export const DashBoard: FC<TDashboardProps> = ({}) => {
  const [data, setData] = useState<CompanyData>(dashBoardData);

  const columns = useMemo<IColumn<Issue>[]>(() => {
    return data.issues.map(test => {
      return { dataField: 'name', width: '100px', header: 'Name' }
    })
  }, [data]);

  return (
    <div className={'page_container'}>
      <DashBoardTable data={data.issues} columns={columns} height={'200px'} />
    </div>
  );
}