import React, {FC} from 'react';

import './index.scss';
import {GButton} from "../Button";

type TBannerProps = {};

export const Banner: FC<TBannerProps> = ({}) => {
  return (
    <div className="banner">
      <h1>Cookie Settings</h1>

      <div className="banner-content">
        <p>Our website uses some cookies and records your IP address... <a href="#">Learn more</a></p>

        <p>With your consent, Lalala may also use cookies...
          <a href="#">Privacy Notice</a> and <a href="#">Terms of Use</a>.
        </p>
      </div>

      <div className="banner-actions">
        <GButton
          className="banner-button accept"
          textOption={{caption: 'Accept All', isVisible: true}}
        />
        <GButton
          className="banner-button manage"
          textOption={{caption: 'Manage Settings', isVisible: true}}
        />
        <GButton
          className="banner-button close"
          textOption={{caption: 'Close', isVisible: true}}
        />
      </div>
    </div>
  );
}