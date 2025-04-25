import React, {FC} from 'react'

import { FontsProperties } from '@/units'

import './index.scss'


type TFontsPageProps = {};

export const FontsPage: FC<TFontsPageProps> = ({}) => {
  return (
    <div className={'font-page-container'}>
      <FontsProperties />
    </div>
  );
}