import React, {PropsWithChildren} from 'react';

import './index.scss';

import {GridContainer} from "./grid";


type TDisplayProps = {}

export const ContentsContainer = ({children}: PropsWithChildren) => {
  return <div className={'container--contents'}>
    {children}
    <GridContainer />
  </div>
}
