import React, {FC} from 'react'
import {GridContainer} from "../../../units/display/grid";


type TGridPageProps = {};

export const GridPage: FC<TGridPageProps> = ({}) => {
  return (
    <div className={'grid-page-container'}>
      <GridContainer />
    </div>
  );
}