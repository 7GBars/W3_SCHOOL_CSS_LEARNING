import React, {FC} from 'react';

import './index.scss';
import { GButton } from "@/components";

type TFlexContainerProps = {};

export const FlexContainer: FC<TFlexContainerProps> = ({}) => {
  return (
    <div className={'flex-container'}>
      <div className="flex_container__element command-bar">
        <div className={'command-bar_item'}>
          <GButton className={'button_overflow'} textOption={{caption: 'Test data Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque explicabo laborum nisi quam qui', isVisible: true}}/>
        </div>
        <div className={'command-bar_item'}>Test Test data Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque explicabo labor </div>
        <div className={'command-bar_item'}>Test data</div>
      </div>
      <div className="flex_container__element tool-bar">

        <div>Test</div>
      </div>
    </div>
  );
};

FlexContainer.displayName = 'FlexContainer'