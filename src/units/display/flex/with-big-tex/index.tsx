import React, {FC} from 'react';

import './index.scss';
import { GButton } from "@/components";

type TFlexContainerBigTextProps = {};

export const FlexContainerBigText: FC<TFlexContainerBigTextProps> = ({}) => {

  return (
    <div className={'flex-container_big-text'}>
      <div className="flex_container__element command-bar">
        <div className={'command-bar_item'}>
          <GButton className={'button_overflow'} textOption={{caption: 'Test data sssLorem  saaaaaaaaaaaa saaaaaaas s asaaaaaaa aaipsum dolor sisaaaaaaaaat ametam qui', isVisible: true}}/>
        </div>
        <div className={'command-bar_item'}>Test Test data Lorem ipsum dolor sing elit. Eaque explicabo labor </div>
        <div className={'command-bar_item'}>Test data</div>
      </div>
      <div className="flex_container__element tool-bar">

        <div>Test</div>
      </div>
    </div>
  );
};

FlexContainerBigText.displayName = 'FlexContainerBigText'