import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

import frameLaptop from 'images/device-frames/frame-laptop.svg';
import frameMobile from 'images/device-frames/frame-mobile.svg';
import frameTablet from 'images/device-frames/frame-tablet.svg';

import classes from './PortfolioDeviceLineup.scss';
import { LineupItem, PortfolioDeviceLineupProps } from './PortfolioDeviceLineup.types';

const PortfolioDeviceLineup: FunctionComponent<PortfolioDeviceLineupProps> = ({
  desktopImage,
  tabletImage,
  mobileImage,
}) => {
  const items: LineupItem[] = [
    {
      key: 1,
      type: 'desktop',
      frameSrc: frameLaptop,
      imageSrc: desktopImage,
    },
    {
      key: 2,
      type: 'tablet',
      frameSrc: frameTablet,
      imageSrc: tabletImage,
    },
    {
      key: 3,
      type: 'mobile',
      frameSrc: frameMobile,
      imageSrc: mobileImage,
    },
  ];

  return (
    <div className={classes['portfolio-device-lineup']}>
      {items.map(({ frameSrc, imageSrc, key, type }: LineupItem) => (
        <div
          key={key}
          className={classnames(
            classes['portfolio-device-lineup__item'],
            classes[`portfolio-device-lineup__item--${type}`],
          )}
        >
          <figure className={classes['portfolio-device-lineup__figure']}>
            <img
              src={frameSrc}
              alt=""
              className={classes['portfolio-device-lineup__device-frame']}
            />
            <div className={classes['portfolio-device-lineup__device-img']}>
              <img src={imageSrc} alt="" />
            </div>
          </figure>
        </div>
      ))}
    </div>
  );
};

export default PortfolioDeviceLineup;
