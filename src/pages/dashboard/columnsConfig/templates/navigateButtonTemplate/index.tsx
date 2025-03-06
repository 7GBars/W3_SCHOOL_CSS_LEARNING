import React, {FC, useMemo} from 'react'

import {SITE_COLORS, type Issue, type ESiteColor, type ESiteId} from "../../../../../models-view";

import './index.scss'
import {GButton} from "../../../../../components/Button";


type TSiteCellTemplateProps = {
  value: string;
  issue: Issue;
}
export const SiteCellTemplate: FC<TSiteCellTemplateProps> = ({ value, issue}) => {
  const { status} = issue;

  const buttonInfo = useMemo(() => {
    return {
      backgroundColor: status !== 'DRAFT' ? '#2EE5AC' : 'grey',
      text:  status !== 'DRAFT' ? 'Result' : 'Finalize',
    };
  }, [status]);

  return (
    <div className={'site-cell'}>
      <div className={'site-cell__text'}>{value}</div>
      <GButton
        className={'site-cell__button'}
        textOption={{isVisible: true, caption: buttonInfo.text}}
        style={{ backgroundColor: buttonInfo.backgroundColor }}
      />
    </div>
  );
}