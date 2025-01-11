import React, {PropsWithChildren} from 'react';

import './index.scss';
import { Card, CardsContainer } from "../../components";
import { displayValues } from "../../__mocks__";

type TDisplayProps = {}

export const Display: React.FC<TDisplayProps> = ({}) => {
  const cards =  displayValues.map(v => <Card id={v.title} title={v.title} description={v.description}/>)
  return (
    <CardsContainer>
      <ContentsContainer>
        {cards}
      </ContentsContainer>
    </CardsContainer>
  );
}


const ContentsContainer = ({children}: PropsWithChildren) => {
  return <div className={'container--contents'}>
    {children}
  </div>
}
