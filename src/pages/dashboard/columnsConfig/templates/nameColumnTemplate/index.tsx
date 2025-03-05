import React, {FC} from 'react'

import {Issue} from "../../../../../models-view";

import './index.scss'


type TCompanyCellTemplateProps = {
  value: string;
  issue: Issue;
}
export const CompanyCellTemplate: FC<TCompanyCellTemplateProps> = ({ value, issue}) => {
  const { siteId} = issue;

  return (
    <div className={'company-cell'}>
      <div className={'company-cell__color'}></div>
      <div className={'company-cell__text'}>
        {value}
      </div>
    </div>
  );
}