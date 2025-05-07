import React, { FC, useCallback, useState } from 'react';
import styled from 'styled-components';

import {
  ReflexContainer,
  ReflexSplitter,
  ReflexElement
} from 'react-reflex'

import 'react-reflex/styles.css'


import { GButton, GSelectBox } from "@/components";
import type { JustifyContentType } from "./types";

import './index.scss';
import {JUSTIFY_CONTENT_OPTIONS} from "@/units/display/flex/simple/options-data";



type TFlexContainerProps = {};

const StyledFlexContainer = styled.div<{
  direction: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  wrap: 'wrap' | 'nowrap';
  gap: [number, number];
  justifyContent: JustifyContentType['value']
}>`
    display: flex;
    flex-direction: ${({direction}) => direction};
    flex-wrap: ${({wrap}) => wrap};
    gap: ${({gap}) => `${gap[0]}px ${gap[1]}px;`};
    justify-content: ${({justifyContent}) => justifyContent }
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
  const [justifyContent, setJustifyContent] = useState<JustifyContentType['value']>('flex-start');


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

  const changeJustifyContent = useCallback((data: JustifyContentType) => {
    setJustifyContent(data.value);
  }, []);


  return (
    <div className={'flex-example-simple'}>
      <ReflexContainer orientation={'vertical'} className={'resize-panel'}>
        <ReflexElement flex={0.8}>
          <StyledFlexContainer
            className={`flex-container`}
            direction={flexDirection}
            wrap={flexWrapMode}

            justifyContent={justifyContent}
            gap={gap}
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
            className={'flex-options-box'}
            textOption={{caption: 'flex-wrap '}}
            labelExpr={'mode'}
            keyExpr={'id'}
            options={[{mode: 'wrap', id: 1}, {mode: 'nowrap', id: 2}]}
            onValueChange={changeWrapMode}
          />
          <GSelectBox<{ size: number, id: number }>
            className={'flex-options-box'}
            textOption={{caption: 'element width'}}
            labelExpr={'size'}
            keyExpr={'id'}
            options={[{size: 50, id: 1}, {size: 100, id: 2}, {size: 350, id: 3}]}
            onValueChange={changeElementsWidth}
          />
          <GSelectBox<{ size: [number, number], id: number, title: string }>
            className={'flex-options-box'}
            textOption={{caption: 'Gap'}}
            labelExpr={'title'}
            keyExpr={'id'}
            options={[{size: [0, 20], id: 1, title: 'Only column gap'}, {size: [20, 0], id: 2, title: 'Only row gap'}, {size: [50, 50], id: 3, title: 'Gap 50px'}]}
            onValueChange={changeContainerGapSize}
          />
          <GSelectBox<JustifyContentType>
            className={'flex-options-box'}
            textOption={{caption: 'Justify Content'}}
            labelExpr={'value'}
            keyExpr={'id'}
            options={JUSTIFY_CONTENT_OPTIONS}
            onValueChange={changeJustifyContent}
          />
        </ReflexElement>
      </ReflexContainer>

      <div className={'commands-bar'}>

      </div>
    </div>
  );
};

FlexContainer.displayName = 'FlexContainer'
