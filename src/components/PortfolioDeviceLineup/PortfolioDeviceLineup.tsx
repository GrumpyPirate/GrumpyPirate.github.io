import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import LoadableImage from 'components/LoadableImage/LoadableImage';
import frameLaptop from 'images/device-frames/frame-laptop.svg';
import frameMobile from 'images/device-frames/frame-mobile.svg';
import frameTablet from 'images/device-frames/frame-tablet.svg';
import { ContentService } from 'services/ContentService';
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
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${ContentService.getResizedImage(imageSrc, {
                    format: 'webp',
                    width: 486,
                  })} 486w, ${ContentService.getResizedImage(imageSrc, {
                    format: 'webp',
                    width: 972,
                  })} 972w`}
                  sizes="486px"
                />
                <source
                  type="image/jpeg"
                  srcSet={`${ContentService.getResizedImage(imageSrc, {
                    format: 'jpg',
                    width: 486,
                  })} 486w, ${ContentService.getResizedImage(imageSrc, {
                    format: 'jpg',
                    width: 972,
                  })} 972w`}
                  sizes="486px"
                />

                <source
                  type="image/webp"
                  srcSet={`${ContentService.getResizedImage(imageSrc, {
                    format: 'webp',
                    width: 406,
                  })} 406w, ${ContentService.getResizedImage(imageSrc, {
                    format: 'webp',
                    width: 812,
                  })} 812w`}
                  sizes="406px"
                />
                <source
                  type="image/jpeg"
                  srcSet={`${ContentService.getResizedImage(imageSrc, {
                    format: 'jpg',
                    width: 406,
                  })} 406w, ${ContentService.getResizedImage(imageSrc, {
                    format: 'jpg',
                    width: 812,
                  })} 812w`}
                  sizes="406px"
                />

                <LoadableImage loading="lazy" src={imageSrc} alt="" />
              </picture>
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
