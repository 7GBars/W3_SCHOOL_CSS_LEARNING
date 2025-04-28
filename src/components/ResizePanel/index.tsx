// SimplifiedControlsDemo.tsx
import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle, useCallback
} from 'react';


import {
  ReflexContainer, ReflexElement,
  ReflexSplitter,
} from 'react-reflex'
import 'react-reflex/styles.css';

import './index.scss'


import type {PaneConfig} from "./types";



export const ResizePanelDemo1: React.FC = () => {
  const orientation = 'vertical';
  const [flex, setFlex] = useState(0.5);
  const [panes, setPanes] = useState<Record<string, PaneConfig>>({
    pane1: {
      id: 'pane1',
      name: 'Pane 1',
      direction: 1,
      minSize: 25,
    },
    pane2: {
      id: 'pane22',
      name: 'Pane 2',
      direction: -1,
      minSize: 25,
    }
  })

  const onFullScreenHandler1 = () => {
    const newSize = flex === 1 ? 0.5 : 1;
    setFlex(newSize);
  }

  const onFullScreenHandler2 = () => {
    const newSize = flex === 0 ? 0.5 : 0;
    setFlex(newSize);
  }
  return (
    <ReflexContainer
      orientation={orientation}
      style={{ height: '100vh' }}
      className={'pane-content'}
    >
      <ReflexElement flex={flex} className={'resize-panel__reflex-element'}>
        <button onClick={onFullScreenHandler1}> fullSize </button>
      </ReflexElement>


      <ReflexSplitter />
      <ReflexElement className={'resize-panel__reflex-element'}>
        <button onClick={onFullScreenHandler2}> fullSize </button>
      </ReflexElement>


    </ReflexContainer>
  )
}
