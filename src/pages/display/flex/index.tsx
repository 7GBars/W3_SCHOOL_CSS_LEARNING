import React, { FC, useMemo, useState } from 'react'

import { Flex } from "@/units";
import { GButton } from "@/components";

import './index.scss';


type TFlexPageProps = {};

const units = [
  { name: 'FlexContainer', component: Flex.FlexContainer },
  { name: 'FlexBigText', component: Flex.FlexContainerBigText },

] as const;

type TUnitsNames = typeof units[number]['name'];


export const FlexPage: FC<TFlexPageProps> = ({}) => {
  const [currentExample, setCurrentExample] = useState<TUnitsNames>(units[0].name);
  const exampleButtons = useMemo(() => (
    units.map(example => (
      <React.Fragment key={example.name}>
        <GButton
          textOption={{ caption: example.name, isVisible: true }}
          onClick={() => setCurrentExample(example.name)}
        />
      </React.Fragment>
    ))
  ), [currentExample]);

 const currentExampleComponent = useMemo(() => {
   const currentExampleComponent = units.find(unit => unit.name === currentExample);
   return currentExampleComponent?.component && <currentExampleComponent.component />;
 }, [currentExample]);

  return (
    <div className={'flex-page-container'}>
      <div className={'flex-page-container__buttons'}>
        {exampleButtons}
      </div>
      <div className={'flex-page-container__example-block'}>
        {currentExampleComponent}
      </div>
    </div>
  );
}