import React, {FC, useMemo} from 'react'

import {SITE_COLORS, type Issue, type ESiteColor, type ESiteId} from "../../../../../models-view";

import './index.scss'


type TCompanyCellTemplateProps = {
  value: string;
  issue: Issue;
}
export const CompanyCellTemplate: FC<TCompanyCellTemplateProps> = ({ value, issue}) => {
  const { siteId} = issue;

  const backgroundColor = useMemo(() => {
    return SITE_COLORS[siteId as ESiteId] || 'gray'; // Возвращаем цвет или 'gray' по умолчанию
  }, [siteId]);

  return (
    <div className={'company-cell'}>
      <div className={'company-cell__color'} style={{backgroundColor}}></div>
      <div className={'company-cell__text'}>
        {value}
      </div>
    </div>
  );
}