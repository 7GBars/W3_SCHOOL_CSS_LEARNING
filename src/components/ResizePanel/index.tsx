// SimplifiedControlsDemo.tsx
import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle
} from 'react';


import {
  ReflexContainer,
  ReflexElement,
  ReflexSplitter,
  PosNeg
} from 'react-reflex'
import 'react-reflex/styles.css';


import type {PaneConfig} from "./types";
import {ControlledInnerElement} from "./ControledElement";


export const ResizePanelDemo1: React.FC = () => {
  const orientation = 'vertical';
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


  return (
    <ReflexContainer
      orientation={orientation}
      style={{ height: '100vh' }}
    >
      <ControlledInnerElement {...panes.pane1}/>
      <ReflexSplitter propagate={true}/>
      <ControlledInnerElement {...panes.pane2}/>

    </ReflexContainer>
  )
}
