import React, {FC} from 'react';

import './index.scss';

type TGridContainerProps = {};

export const GridContainer: FC<TGridContainerProps> = ({}) => {
  return (
    <div className={'grid-container'}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </div>
  );
};

GridContainer.displayName = 'GridContainer'