import React, { PropsWithChildren } from 'react';

import './index.scss';

type TCardsContainerProps = PropsWithChildren<{}>

export const CardsContainer: React.FC<TCardsContainerProps> = ({children}) => {
  return (
      <div className={'cards'}>
        {children}
      </div>
  );
}

