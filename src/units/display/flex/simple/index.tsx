import React, { FC, useCallback, useState } from 'react';

import './index.scss';
import { classNames } from "@/helpers";
import { GButton } from "@/components";


type TFlexContainerProps = {};

export const FlexContainer: FC<TFlexContainerProps> = ({}) => {
  const [flexDirection, setFlexDirection] = useState<'row' | 'column'>('row');

  const cls = classNames('flex-container', {
    'flex-container_direction-column': flexDirection === 'column',
  }, []);

  const changeDirectionHandler = useCallback(() => {
    setFlexDirection(prev => prev === 'row' ? 'column' : 'row');
  }, [])

  return (
    <div>
      <div className={cls}>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing.</div>

      </div>
      <div className={'commands-bar'}>
        <GButton textOption={{caption: 'Change direction', isVisible: true}} onClick={changeDirectionHandler}/>
      </div>
    </div>
  );
};

FlexContainer.displayName = 'FlexContainer'