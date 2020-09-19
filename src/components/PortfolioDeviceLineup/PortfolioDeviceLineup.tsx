import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import frameLaptop from 'images/device-frames/frame-laptop.svg';
import frameMobile from 'images/device-frames/frame-mobile.svg';
import frameTablet from 'images/device-frames/frame-tablet.svg';
import { mediaQueries, rem } from 'styles';

import {
  DeviceFrame,
  DeviceImage,
  DevicePreview,
  LineupItem,
} from './PortfolioDeviceLineup.constants';
import { LineupItemData, PortfolioDeviceLineupProps } from './PortfolioDeviceLineup.types';

const PortfolioDeviceLineup: FunctionComponent<PortfolioDeviceLineupProps> = ({
  className,
  desktopImage,
  tabletImage,
  mobileImage,
}) => {
  const items: LineupItemData[] = [
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
    <div className={className}>
      {items.map(({ frameSrc, imageSrc, key, type }) => (
        <LineupItem key={key} type={type}>
          <DevicePreview>
            <DeviceFrame src={frameSrc} alt="" />
            <DeviceImage>
              <img src={imageSrc} alt="" />
            </DeviceImage>
          </DevicePreview>
        </LineupItem>
      ))}
    </div>
  );
};

export default styled(PortfolioDeviceLineup)`
  height: ${rem(360)};
  position: relative;

  @media ${mediaQueries.xl} {
    height: ${rem(420)};
  }

  @media ${mediaQueries.smDown} {
    display: none;
  }
`;
