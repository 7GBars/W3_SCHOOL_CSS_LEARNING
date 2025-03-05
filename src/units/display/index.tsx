import React, {PropsWithChildren} from 'react';

import './index.scss';


type TDisplayProps = {}

export const ContentsContainer = ({children}: PropsWithChildren) => {
  return <div className={'container--contents'}>
    {children}
  </div>
}
