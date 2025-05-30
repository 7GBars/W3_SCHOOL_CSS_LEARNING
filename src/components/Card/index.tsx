import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import type {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {faFaceSmile as DEFAULT_ICON} from "@fortawesome/free-solid-svg-icons";
import './index.scss';



type TCardProps = {
  id: string;
  title: string;
  description: string;
  icon?: IconDefinition;
}

export const Card: React.FC<TCardProps> = ({ id, title, description, icon }) => {
  return (
    <>
      <div id={id} className={'card'}>
        <div className="card__title-wrapper">
          <FontAwesomeIcon icon={icon ?? DEFAULT_ICON} className={'title-wrapper__icon'} /> <span className={'title-wrapper__text'}>{title}</span>
        </div>
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

