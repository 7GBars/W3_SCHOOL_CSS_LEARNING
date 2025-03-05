import React, {FC, useMemo} from 'react'

import {Issue, SiteColor, SiteId} from "../../../../../models-view";

import './index.scss'


type TCompanyCellTemplateProps = {
  value: string;
  issue: Issue;
}
export const CompanyCellTemplate: FC<TCompanyCellTemplateProps> = ({ value, issue}) => {
  const { siteId} = issue;

  const siteColor = useMemo(() => {
    switch (siteId) {
      case SiteId.GAMES: return SiteColor.GAMES
      case SiteId.DELIVERY: return SiteColor.DELIVERY
      case SiteId.MARKET: return SiteColor.MARKET
      default:
        return 'gray';
    }
  }, []);

  return (
    <div className={'company-cell'}>
      <div className={'company-cell__color'} style={{backgroundColor: siteColor}}></div>
      <div className={'company-cell__text'}>
        {value}
      </div>
    </div>
  );
}