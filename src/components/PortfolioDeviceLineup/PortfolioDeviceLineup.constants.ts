import styled, { css } from 'styled-components';

import { mediaQueries, rem } from 'styles';

import { LineupItemType } from './PortfolioDeviceLineup.types';

const mobileAspect = 439 / 222;
const mobileDeviceFrameWidthMd = 96;
const mobileDeviceFrameWidthXl = mobileDeviceFrameWidthMd * 1.2;

const tabletAspect = 477 / 322;
const tabletDeviceFrameWidthMd = 180;
const tabletDeviceFrameWidthXl = tabletDeviceFrameWidthMd * 1.2;

const desktopAspect = 291 / 506;
const desktopDeviceFrameWidthMd = 540;
const desktopDeviceFrameWidthXl = desktopDeviceFrameWidthMd * 1.2;

export const DevicePreview = styled.figure`
  margin: 0;
  position: relative;
`;

export const DeviceFrame = styled.img`
  display: block;
  height: 100%;
  left: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;
`;

export const DeviceImage = styled.figure`
  display: block;
  margin: 0;
  overflow-y: auto;
  position: relative;
  z-index: 1;

  img {
    display: block;
    height: auto;
    width: 100%;
  }
`;

export const LineupItem = styled.div<{ type: LineupItemType }>`
  left: 50%;
  position: absolute;

  ${({ type }) => {
    switch (type) {
      case 'desktop':
        return css`
          bottom: 20px;
          transform: translateX(-50%);

          ${DevicePreview} {
            height: ${rem(desktopDeviceFrameWidthMd * desktopAspect)};
            width: ${rem(desktopDeviceFrameWidthMd)};

            @media ${mediaQueries.xl} {
              height: ${rem(desktopDeviceFrameWidthXl * desktopAspect)};
              width: ${rem(desktopDeviceFrameWidthXl)};
            }
          }

          ${DeviceImage} {
            height: 82%;
            left: 12.4%;
            top: 6%;
            width: 75.125%;
          }
        `;
      case 'tablet':
        return css`
          bottom: 10px;
          transform: translateX(66%);

          ${DevicePreview} {
            height: ${rem(tabletDeviceFrameWidthMd * tabletAspect)};
            width: ${rem(tabletDeviceFrameWidthMd)};

            @media ${mediaQueries.xl} {
              height: ${rem(tabletDeviceFrameWidthXl * tabletAspect)};
              width: ${rem(tabletDeviceFrameWidthXl)};
            }
          }

          ${DeviceImage} {
            height: 79.85%;
            left: 5.75%;
            top: 9.4%;
            width: 88.95%;
          }
        `;
      case 'mobile':
      default:
        return css`
          bottom: 0;
          transform: translateX(75%);

          ${DevicePreview} {
            height: ${rem(mobileDeviceFrameWidthMd * mobileAspect)};
            width: ${rem(mobileDeviceFrameWidthMd)};

            @media ${mediaQueries.xl} {
              height: ${rem(mobileDeviceFrameWidthXl * mobileAspect)};
              width: ${rem(mobileDeviceFrameWidthXl)};
            }
          }

          ${DeviceImage} {
            height: 74.75%;
            left: 6.8%;
            top: 13.125%;
            width: 86.25%;
          }
        `;
    }
  }}
`;
