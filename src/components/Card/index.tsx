import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import type {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {faFaceSmile as DEFAULT_ICON} from "@fortawesome/free-solid-svg-icons";
import './index.scss';
import {Toast} from "@/components";



type TCardProps = {
  id: string;
  title: string;
  description: string;
  icon?: IconDefinition;
}

export const Card: React.FC<TCardProps> = ({ id, title, description, icon }) => {
  const [showToast, setShowToast] = useState(false);
  return (
    <>
      <div id={id} className={'card'}>
        <div className="card__title-wrapper"  onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          navigator.clipboard.writeText(title)
            .then((text) => {
              setShowToast(true)
            });
        }}>
         <span> <i className="fa-solid fa-face-smile"></i> {title}</span>
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
      {/* Всплывающее уведомление */}
      {showToast && (
        <Toast
          message="Текст скопирован!"
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
}

