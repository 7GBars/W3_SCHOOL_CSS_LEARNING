import React, { FC, useCallback, useState } from 'react';

import './index.scss';
import { classNames } from "@/helpers";
import { GButton, GSelectBox } from "@/components";


type TFlexContainerProps = {};

export const FlexContainer: FC<TFlexContainerProps> = ({}) => {
  const [flexDirection, setFlexDirection] = useState<'row' | 'column'>('row');
  const [flexWrapMode, setFlexWrapMode] = useState<'wrap' | 'nowrap'>('nowrap');

  const cls = classNames('flex-container', {
    'flex-container_direction-column': flexDirection === 'column',
    'flex-container_wrap-mode-wrapped': flexWrapMode === 'wrap',
  }, []);

  const changeDirectionHandler = useCallback(() => {
    setFlexDirection(prev => prev === 'row' ? 'column' : 'row');
  }, []);

  const changeWrapMode = useCallback((data: {mode: 'wrap' | 'nowrap', id: number}) => {
    setFlexWrapMode(data.mode)
  }, [])

  return (
    <div className={'flex-example-simple'}>
      <div className={cls}>
        <div className={'flex-container_item'}>Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
        <div className={'flex-container_item'}>Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
        <div className={'flex-container_item'}>Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
        <div className={'flex-container_item'}>Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
        <div className={'flex-container_item'}>Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
      </div>
      <div className={'commands-bar'}>
        <GButton textOption={{caption: 'Change direction', isVisible: true}} onClick={changeDirectionHandler}/>
        <GSelectBox textOption={{caption: 'Change flex-wrap mode'}} labelExpr={'mode'} keyExpr={'id'} Options={[{mode: 'wrap', id: 1}, {mode: 'nowrap', id: 2}]} onValueChange={changeWrapMode}/>
      </div>
    </div>
  );
};

FlexContainer.displayName = 'FlexContainer'