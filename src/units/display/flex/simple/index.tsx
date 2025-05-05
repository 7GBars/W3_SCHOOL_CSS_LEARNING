import React, { FC, useCallback, useState } from 'react';

import './index.scss';
import { classNames } from "@/helpers";
import { GButton, GSelectBox } from "@/components";


type TFlexContainerProps = {};

export const FlexContainer: FC<TFlexContainerProps> = ({}) => {
  const [flexDirection, setFlexDirection] = useState<'row' | 'column'>('row');
  const [elementWidth, setElementWidth] = useState<number>(50);
  const [flexWrapMode, setFlexWrapMode] = useState<'wrap' | 'nowrap'>('nowrap');

  const cls = classNames('flex-container', {
    'flex-container_direction-column': flexDirection === 'column',
    'flex-container_wrap-mode-wrapped': flexWrapMode === 'wrap',
  }, []);

  const changeDirectionHandler = useCallback(() => {
    setFlexDirection(prev => prev === 'row' ? 'column' : 'row');
  }, []);

  const changeWrapMode = useCallback((data: {mode: 'wrap' | 'nowrap', id: number}) => {
    setFlexWrapMode(data.mode);
  }, []);

  const changeElementsWidth = useCallback((data: {size: number, id: number}) => {
    setElementWidth(data.size);
    debugger
  }, []);



  return (
    <div className={'flex-example-simple'}>
      <div className={cls}>
        <div className={'flex-container_item'} style={{width: elementWidth}}>Lorem </div>
        <div className={'flex-container_item'} style={{width: elementWidth}}>Lorem ipsum .</div>
        <div className={'flex-container_item'} style={{width: elementWidth}}>Lorem ipsum dolor</div>
        <div className={'flex-container_item'} style={{width: elementWidth}}>Lorem ipsum dolor sit </div>
        <div className={'flex-container_item'} style={{width: elementWidth}}>Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
      </div>
      <div className={'commands-bar'}>
        <GButton textOption={{caption: 'Change direction', isVisible: true}} onClick={changeDirectionHandler}/>
        <GSelectBox
          textOption={{caption: 'Change flex-wrap mode'}}
          labelExpr={'mode'}
          keyExpr={'id'}
          options={[{mode: 'wrap', id: 1}, {mode: 'nowrap', id: 2}]}
          onValueChange={changeWrapMode}
        />
        <GSelectBox<{ size: number, id: number }>
          textOption={{caption: 'Change flex-wrap mode'}}
          labelExpr={'size'}
          keyExpr={'id'}
          options={[{size: 50, id: 1}, {size: 100, id: 2}, {size: 350, id: 3}]}
          onValueChange={changeElementsWidth}
        />
      </div>
    </div>
  );
};

FlexContainer.displayName = 'FlexContainer'
