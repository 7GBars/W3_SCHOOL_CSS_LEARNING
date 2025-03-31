import React, { FC, useMemo, useState } from 'react'

import { Grid } from "@/units";
import { GButton } from "@/components";

import './index.scss';

type TGridPageProps = {};

const units = [
  { name: 'GridContainer', component: Grid.GridContainer },
  { name: 'GridTemplateColumns', component: Grid.GridTemplateColumns },
] as const;

type TUnitsNames = typeof units[number]['name'];


export const GridPage: FC<TGridPageProps> = ({}) => {
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
    <div className={'grid-page-container'}>
      <div className={'grid-page-container__buttons'}>
        {exampleButtons}
      </div>
      <div className={'grid-page-container__example-block'}>
        {currentExampleComponent}
      </div>
    </div>
  );
}