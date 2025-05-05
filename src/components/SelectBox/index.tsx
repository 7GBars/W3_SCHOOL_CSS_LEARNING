import React from 'react';
import { classNames } from '../../helpers';

import './index.scss';

type TTextOption = {
  textOption?: {
    caption: string;
    isVisible?: boolean;
  };
};

type GSelectBoxProps<T> = {
  options: T[];
  keyExpr: keyof T;
  labelExpr: keyof T;
  onValueChange: (value: T) => void;
} & TTextOption & {
  className?: string;
};

export const GSelectBox = <T,>({
                                 textOption,
                                 options,
                                 keyExpr,
                                 labelExpr,
                                 onValueChange,
                                 className,
}: GSelectBoxProps<T>) => {
  const cls = classNames('g-selectbox', {}, [className]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = options.find(
      (opt) => String(opt[keyExpr]) === e.target.value
    );
    if (selected) {
      onValueChange(selected);
    }
  };

  return (
    <div className={cls}>
      {textOption?.caption && <label className="g-selectbox__label">{textOption.caption}</label>}
      <select className="g-selectbox__select" onChange={handleChange}>
        {options.map((opt) => (
          <option key={String(opt[keyExpr])} value={String(opt[keyExpr])}>
            {String(opt[labelExpr])}
          </option>
        ))}
      </select>
    </div>
  );
};
