import React from 'react';

import './index.scss';


type TCardProps = { id: string; title: string; description: string}

export const Card: React.FC<TCardProps> = ({ id, title, description }) => {
  return (
    <>
      <div id={id} className={'card'}>
        <b className={'card__title'}>{title}</b>
        <p
          className={'card__description'}
          onMouseUp={() => {
            const selection = window.getSelection();
            const selectedText = selection?.toString().trim();
            if (selectedText) {
              navigator.clipboard.writeText(selectedText)
                .then(() => alert(`Скопировано: ${selectedText}`))
                .catch(() => alert("Не удалось скопировать текст"));
            }
          }}
        > {description} </p>
      </div>
    </>
  );
}

