import React, {FC} from 'react'
import {Banner} from "../../components";

import './index.scss';


type TPageTestProps = {};

export const PageTest: FC<TPageTestProps> = ({}) => {
  return (
    <div className={'page_container'}>
      <Banner/>
    </div>
  );
}