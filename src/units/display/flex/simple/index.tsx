import React, { FC, useCallback, useState } from 'react';
import styled from 'styled-components';

import {
  ReflexContainer,
  ReflexSplitter,
  ReflexElement
} from 'react-reflex'



import { GButton, GSelectBox } from "@/components";

import { type AlignItemsOptionType, HeightOptionType, JustifyContentOptionType } from "./types";
import { ALIGN_ITEMS_OPTIONS, CONTAINER_HEIGHT_OPTIONS, JUSTIFY_CONTENT_OPTIONS } from "./options-data";

import 'react-reflex/styles.css'
import './index.scss';



type TFlexContainerProps = {};

const StyledFlexContainer = styled.div<{
  direction: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  wrap: 'wrap' | 'nowrap';
  gap: [number, number];
  justifyContent: JustifyContentOptionType['value'],
  alignItems: AlignItemsOptionType['value']
  containerHeight: string
}>`
    display: flex;
    flex-direction: ${({direction}) => direction};
    flex-wrap: ${({wrap}) => wrap};
    gap: ${({gap}) => `${gap[0]}px ${gap[1]}px;`};
    justify-content: ${({justifyContent}) => justifyContent };
    align-items: ${({alignItems}) => alignItems };
    height: ${({containerHeight}) => containerHeight };
`;

const StyledFlexElement = styled.div<{
  width: number;
}>`
  width: ${({ width } ) => `${width}px`}
`

export const FlexContainer: FC<TFlexContainerProps> = ({}) => {
  const [flexContainerHeight, setFlexContainerHeight] = useState<string>('auto');
  const [elementWidth, setElementWidth] = useState<number>(50);

  const [flexDirection, setFlexDirection] = useState<'row' | 'column'>('row');
  const [flexWrapMode, setFlexWrapMode] = useState<'wrap' | 'nowrap'>('nowrap');
  const [justifyContent, setJustifyContent] = useState<JustifyContentOptionType['value']>('flex-start');
  const [alignItems, setAlignItems] = useState<AlignItemsOptionType['value']>('stretch');
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

  const changeJustifyContent = useCallback((data: JustifyContentOptionType) => {
    setJustifyContent(data.value);
  }, []);

  const changeContainerHeight = useCallback((data: HeightOptionType) => {
    setFlexContainerHeight(data.value);
  }, []);

 const changeAlignItems = useCallback((data: AlignItemsOptionType) => {
   setAlignItems(data.value);
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
            alignItems={alignItems}
            containerHeight={flexContainerHeight}
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
          <GSelectBox<HeightOptionType>
            className={'flex-options-box'}
            textOption={{caption: 'Flex container height'}}
            labelExpr={'value'}
            keyExpr={'id'}
            options={CONTAINER_HEIGHT_OPTIONS}
            onValueChange={changeContainerHeight}
          />
          <GSelectBox
            className={'flex-options-box'}
            textOption={{caption: 'flex-wrap'}}
            labelExpr={'mode'}
            keyExpr={'id'}
            options={[{mode: 'nowrap', id: 1}, {mode: 'wrap', id: 2}]}
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
          <GSelectBox<JustifyContentOptionType>
            className={'flex-options-box'}
            textOption={{caption: 'justify-content (основаная ось)'}}
            labelExpr={'value'}
            keyExpr={'id'}
            options={JUSTIFY_CONTENT_OPTIONS}
            onValueChange={changeJustifyContent}
          />
          <GSelectBox<AlignItemsOptionType>
            className={'flex-options-box'}
            textOption={{caption: 'align-items (поперечная ось)'}}
            labelExpr={'value'}
            keyExpr={'id'}
            options={ALIGN_ITEMS_OPTIONS}
            onValueChange={changeAlignItems}
          />
        </ReflexElement>
      </ReflexContainer>

      <div className={'commands-bar'}>

      </div>
    </div>
  );
};

FlexContainer.displayName = 'FlexContainer'
