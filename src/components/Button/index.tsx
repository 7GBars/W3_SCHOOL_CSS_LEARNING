import React, {FC} from 'react';

import type {UI} from "../../models-view/";
import {classNames} from "../../helpers";

import './index.scss';


type TGButtonProps = {} & UI.IButtonModelBase & UI.IBase;

export const GButton: FC<TGButtonProps> = ({
  textOption,
  icon,
  className,
  ...baseButtonOptions
}) => {
  const cls = classNames('g-button', {} , [className])
  return (
    <button
      className={cls}
      {...baseButtonOptions}
    >
      {textOption.caption}
    </button>
  );
}

//todo @bars - расшарить все пропсыи сформировать компоненту