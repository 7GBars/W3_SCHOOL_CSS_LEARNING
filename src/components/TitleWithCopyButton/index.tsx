import React, {FC, useState} from 'react';
import {Toast} from "@/components";

type TTextWithCopyButtonProps = {
  text: string;
  iconClass?: string;
}
export const TextWithCopyButton: FC<TTextWithCopyButtonProps> = ({ text }) => {
  const [showToast, setShowToast] = useState(false);
  const handler = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text)
      .then((text) => {
        setShowToast(true)
      });
  };

  return (
    <>
       <span className="with-copy-container" >
       <i className="fa-solid fa-face-smile"></i><span> {text}</span>
         {showToast && (
           <Toast
             message="Текст скопирован!"
             onClose={() => setShowToast(false)}
           />
         )}
    </span>
    </>

  )
}
