import React, { FC, useCallback, useState } from 'react';

import './index.scss';



type TFontsPropertiesProps = {};

export const FontsProperties: FC<TFontsPropertiesProps> = ({}) => {


  return (
    <div className={'font-properties'}>
      <p className={'font-properties_font-family serif'}>Lorem ipsum dolor sit amet.</p>
      <p className={'font-properties_font-family sans-serif'}>Lorem ipsum dolor sit amet.</p>
      <p className={'font-properties_font-family monospace'}>Lorem ipsum dolor sit amet.</p>
      <p className={'font-properties_font-family cursive'}>Lorem ipsum dolor sit amet.</p>
      <p className={'font-properties_font-family fantasy'}>Lorem ipsum dolor sit amet.</p>
    </div>
  );
};

FontsProperties.displayName = 'FontsProperties'