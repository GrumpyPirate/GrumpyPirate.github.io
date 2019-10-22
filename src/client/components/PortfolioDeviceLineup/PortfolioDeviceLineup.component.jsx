import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from 'lodash-es';

import frameMobile from 'images/device-frames/frame-mobile.svg';
import frameTablet from 'images/device-frames/frame-tablet.svg';
import frameLaptop from 'images/device-frames/frame-laptop.svg';

import classes from './PortfolioDeviceLineup.component.scss';

const PortfolioDeviceLineup = ({ desktopImage, tabletImage, mobileImage }) => {
  const items = [
    {
      key: `portfolio-device-lineup__item--${uniqueId()}`,
      type: 'desktop',
      frameSrc: frameLaptop,
      imageSrc: desktopImage,
    },
    {
      key: `portfolio-device-lineup__item--${uniqueId()}`,
      type: 'tablet',
      frameSrc: frameTablet,
      imageSrc: tabletImage,
    },
    {
      key: `portfolio-device-lineup__item--${uniqueId()}`,
      type: 'mobile',
      frameSrc: frameMobile,
      imageSrc: mobileImage,
    },
  ];

  return (
    <div className={classes['portfolio-device-lineup']}>
      {items.map(item => (
        <div
          key={item.key}
          className={classnames(
            classes['portfolio-device-lineup__item'],
            classes[`portfolio-device-lineup__item--${item.type}`],
          )}
        >
          <figure className={classes['portfolio-device-lineup__figure']}>
            <img
              src={item.frameSrc}
              alt=""
              className={classes['portfolio-device-lineup__device-frame']}
            />
            <div className={classes['portfolio-device-lineup__device-img']}>
              <img src={item.imageSrc} alt="" />
            </div>
          </figure>
        </div>
      ))}
    </div>
  );
};

PortfolioDeviceLineup.propTypes = {
  desktopImage: PropTypes.string.isRequired,
  tabletImage: PropTypes.string.isRequired,
  mobileImage: PropTypes.string.isRequired,
};

export default PortfolioDeviceLineup;
