import React, { FC, useCallback, useState } from 'react';
import styled from 'styled-components';

import {
  ReflexContainer,
  ReflexSplitter,
  ReflexElement
} from 'react-reflex'

import 'react-reflex/styles.css'


import { GButton, GSelectBox } from "@/components";

import './index.scss';


type TFlexContainerProps = {};

const StyledFlexContainer = styled.div<{
  direction: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  wrap: 'wrap' | 'nowrap';
  gap: [number, number];
}>`
    display: flex;
    flex-direction: ${({direction}) => direction};
    flex-wrap: ${({wrap}) => wrap};
    gap: ${({gap}) => `${gap[0]}px ${gap[1]}px;`};
`;

const StyledFlexElement = styled.div<{
  width: number;
}>`
  width: ${({ width } ) => `${width}px`}
`

export const FlexContainer: FC<TFlexContainerProps> = ({}) => {
  const [flexDirection, setFlexDirection] = useState<'row' | 'column'>('row');
  const [elementWidth, setElementWidth] = useState<number>(50);
  const [flexWrapMode, setFlexWrapMode] = useState<'wrap' | 'nowrap'>('nowrap');
  const [gap, setGap] = useState<[number, number]>([20, 20]);


  const changeDirectionHandler = useCallback(() => {
    setFlexDirection(prev => prev === 'row' ? 'column' : 'row');
  }, []);

  const changeWrapMode = useCallback((data: {mode: 'wrap' | 'nowrap', id: number}) => {
    setFlexWrapMode(data.mode);
  }, []);

  const changeElementsWidth = useCallback((data: {size: number, id: number}) => {
    setElementWidth(data.size);
  }, []);
  const changeContainerGapSize = useCallback((data: {size: [number, number], id: number}) => {
    setGap(data.size);
  }, []);


  return (
    <div className={'flex-example-simple'}>
      <ReflexContainer orientation={'vertical'} className={'resize-panel'}>
        <ReflexElement>
          <StyledFlexContainer
            className={`flex-container`}
            direction={flexDirection}
            gap={gap}
            wrap={flexWrapMode}
          >
            <StyledFlexElement className="flex-container_item" width={elementWidth}> Lorem </StyledFlexElement>
            <StyledFlexElement className="flex-container_item" width={elementWidth}> Lorem ipsum StyledFlexElement. </StyledFlexElement>
            <StyledFlexElement className="flex-container_item" width={elementWidth}> Lorem ipsum dolor </StyledFlexElement>
            <StyledFlexElement className="flex-container_item" width={elementWidth}> Lorem ipsum dolor sit </StyledFlexElement>
            <StyledFlexElement className="flex-container_item" width={elementWidth}> Lorem ipsum dolor sit amet, consectetur adipisicing. </StyledFlexElement>
          </StyledFlexContainer>
        </ReflexElement>
        <ReflexSplitter/>
        <ReflexElement className={'commands-bar'}>
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
          <GSelectBox<{ size: [number, number], id: number, title: string }>
            textOption={{caption: 'Change flex-wrap mode'}}
            labelExpr={'size'}
            keyExpr={'id'}
            options={[{size: [20, 0], id: 1, title: 'Only row gap'}, {size: [0, 20], id: 2, title: 'Only column gap'}, {size: [50, 50], id: 3, title: 'Gap 50px'}]}
            onValueChange={changeContainerGapSize}
          />
        </ReflexElement>
      </ReflexContainer>

      <div className={'commands-bar'}>

      </div>
    </div>
  );
};

FlexContainer.displayName = 'FlexContainer'
