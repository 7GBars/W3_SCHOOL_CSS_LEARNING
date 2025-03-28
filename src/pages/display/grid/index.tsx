import React, {FC} from 'react'
import { Grid } from "@/units";



type TGridPageProps = {};

export const GridPage: FC<TGridPageProps> = ({}) => {
  return (
    <div className={'grid-page-container'}>
      <Grid.GridContainer />
      <Grid.GridTemplateColumns />
    </div>
  );
}