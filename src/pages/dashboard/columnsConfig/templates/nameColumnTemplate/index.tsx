import React, {FC} from 'react'

import './index.scss'

type TCompanyCellTemplateProps = {
  value: string;
}
export const CompanyCellTemplate: FC<TCompanyCellTemplateProps> = ({ value}) => {
  return (
    <div className={'company-cell'}>
      <div className={'company-cell__color'}></div>
      <div className={'company-cell__text'}>
        {value}
      </div>
    </div>
  );
}