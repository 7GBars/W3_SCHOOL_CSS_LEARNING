import React, {FC, ReactNode, useMemo, useState} from 'react'
import {DashBoardTable} from "../../components";
import { dashBoardData } from "../../__mocks__";
import type { CompanyData, IColumn, Issue } from "../../models-view";
import { dashBoardColumnsConfig } from "./columnsConfig";

import './index.scss';


type TDashboardProps = {};

export const DashBoard: FC<TDashboardProps> = ({}) => {
  const [data, setData] = useState<CompanyData>(dashBoardData);

  return (
    <div className={'page_container dashboard_page'}>
      <DashBoardTable<Issue>
        data={data.issues}
        columns={dashBoardColumnsConfig}
        height={'100%'}
        className={'dashboard_page__table'}
      />
    </div>
  );
}