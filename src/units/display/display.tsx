import React, {PropsWithChildren} from 'react';

import './index.scss';
import { Card, CardsContainer } from "../../components";


type TDisplayProps = {}

export const Display: React.FC<TDisplayProps> = ({}) => {
  const cards =  [<></>];
  return (
   <>display page</>
  );
}


const ContentsContainer = ({children}: PropsWithChildren) => {
  return <div className={'container--contents'}>
    {children}
  </div>
}
