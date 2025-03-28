import React, { FC, useMemo, useState } from 'react'

import { Grid } from "@/units";
import { GButton } from "@/components";


type TGridPageProps = {};

const units = [
  { name: 'GridContainer', component: Grid.GridContainer },
  { name: 'GridTemplateColumns', component: Grid.GridTemplateColumns },
] as const;

type TUnitsNames = typeof units[number]['name'];


export const GridPage: FC<TGridPageProps> = ({}) => {
  const [currentExample, setCurrentExample] = useState<TUnitsNames>(units[0].name);

  const gridExamples = useMemo(() => (
    units.map(example => (
      <React.Fragment key={example.name}>
        <GButton
          textOption={{ caption: example.name, isVisible: true }}
          onClick={() => setCurrentExample(example.name)}
        />
        {currentExample === example.name && example.component && <example.component />}
      </React.Fragment>
    ))
  ), [currentExample]);

  return (
    <div className={'grid-page-container'}>
      {gridExamples}
    </div>
  );
}