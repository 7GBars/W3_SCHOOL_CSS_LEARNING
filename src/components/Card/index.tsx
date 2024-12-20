import React from 'react';

import './index.scss';


type TCardProps = { id: string; title: string; description: string}

export const Card: React.FC<TCardProps> = ({ id, title, description }) => {
  return (
    <>
      <div id={id} className={'card'}>
        <b className={'title'}>{title}</b>
        <p className={'description'}> {description} </p>
      </div>
    </>
  );
}

