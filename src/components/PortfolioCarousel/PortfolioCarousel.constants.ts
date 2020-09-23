import styled, { css, SimpleInterpolation } from 'styled-components';

import { animDur, mediaQueries, overflowYScroll, palette, rem } from 'styles';

type SlideVariant = 'mobile' | 'tablet' | 'desktop';

const mobileAspectRatio = 439 / 222;
const mobileDeviceImgWidthDiff = 0.8675;
const mobileDeviceImgHeightDiff = 0.74725;
const mobileDeviceImgOffsetTop = 0.2575;
const mobileDeviceFrameWidthXs = 192;
const mobileDeviceFrameWidthSm = 192;

const tabletAspectRatio = 477 / 322;
const tabletDeviceImgWidthDiff = 0.8875;
const tabletDeviceImgHeightDiff = 0.80125;
const tabletDeviceImgOffsetTop = 0.1375;
const tabletDeviceFrameWidthXs = 224;
const tabletDeviceFrameWidthSm = 320;

const desktopAspectRatio = 291 / 506;
const desktopDeviceImgWidthDiff = 0.75;
const desktopDeviceImgHeightDiff = 0.81375;
const desktopDeviceImgOffsetTop = 0.036225;
const desktopDeviceFrameWidthXs = 290;
const desktopDeviceFrameWidthSm = 420;

export const carouselStyles = css`
  .carousel {
    position: relative;
    width: 100%;

    * {
      box-sizing: border-box;
      padding: 0;
    }

    button {
      background: none;
      border: 0;
      outline: 0;
    }

    img {
      pointer-events: none;
    }

    .carousel {
      position: relative;
    }

    .control-arrow {
      font-size: 18px;
      margin-top: -13px;
      top: 50%;
    }

    .thumbs-wrapper {
      margin: 20px;
      overflow: hidden;
    }

    .thumbs {
      list-style: none;
      position: relative;
      transform: translate3d(0, 0, 0);
      transition: all 0.15s ease-in;
      white-space: nowrap;
    }

    .thumb {
      border: 3px solid #fff;
      display: inline-block;
      margin-right: 6px;
      overflow: hidden;
      padding: 2px;
      transition: border 0.15s ease-in;
      white-space: nowrap;
      width: 80px;

      &.selected,
      &:hover {
        border: 3px solid #333;
        padding: 2px;
      }

      img {
        vertical-align: top;
      }
    }

    .control-dots {
      margin: 0.5rem 0;
      text-align: center;

      .dot {
        background: ${palette.themeAccentLight};
        border-radius: 50%;
        cursor: pointer;
        display: inline-block;
        height: 8px;
        margin: 0 8px;
        opacity: 0.5;
        transition-duration: ${animDur}s;
        transition-property: border, opacity, transform, background-color;
        width: 8px;

        &:hover,
        &.selected {
          background-color: transparent;
          border: solid 1px ${palette.themeAccentLight};
          transform: scale(2);
        }

        &.selected {
          opacity: 1;
        }
      }
    }
  }

  .carousel .control-arrow,
  .carousel.carousel-slider .control-arrow {
    background: none;
    border: 0;
    cursor: pointer;
    font-size: 32px;
    opacity: 0.4;
    position: absolute;
    top: 20px;
    transition: all 0.25s ease-in;
    z-index: 2;

    .control-arrow {
      &:hover {
        opacity: 1;
      }

      &::before {
        border-bottom: 8px solid transparent;
        border-top: 8px solid transparent;
        content: '';
        display: inline-block;
        margin: 0 5px;
      }
    }
  }

  .carousel .control-disabled.control-arrow {
    cursor: inherit;
    display: none;
    opacity: 0;
  }

  .carousel .control-prev.control-arrow {
    left: 0;
  }

  .carousel .control-prev.control-arrow::before {
    border-right: 8px solid #fff;
  }

  .carousel .control-next.control-arrow {
    right: 0;
  }

  .carousel .control-next.control-arrow::before {
    border-left: 8px solid #fff;
  }

  .carousel.carousel-slider {
    margin: 0;
    overflow: hidden;
    position: relative;
  }

  .carousel.carousel-slider .control-arrow {
    bottom: 0;
    color: #fff;
    font-size: 26px;
    margin-top: 0;
    padding: 5px;
    top: 0;
  }

  .carousel.carousel-slider .control-arrow:hover {
    background: rgba(0, 0, 0, 0.2);
  }

  .carousel .slider-wrapper {
    margin: auto;
    overflow: hidden;
    transition: height 0.15s ease-in;
    width: 100%;
  }

  .carousel .slider-wrapper.axis-horizontal .slider {
    display: flex;
  }

  .carousel .slider-wrapper.axis-horizontal .slider .slide {
    flex-direction: column;
    flex-flow: column;
  }

  .carousel .slider-wrapper.axis-vertical {
    display: flex;
  }

  .carousel .slider-wrapper.axis-vertical .slider {
    flex-direction: column;
  }

  .carousel .slider {
    list-style: none;
    position: relative;
    width: 100%;
  }

  .carousel .slider.animated {
    transition: all 0.35s ease-in-out;
  }

  .carousel .slide {
    margin: 0;
    min-width: 100%;
    position: relative;
    text-align: center;
  }

  .carousel .slide img {
    border: 0;
    vertical-align: top;
  }

  .carousel .slide iframe {
    border: 0;
    display: inline-block;
    margin: 0 40px 40px;
    width: calc(100% - 80px);
  }

  .carousel .slide .legend {
    background: #000;
    border-radius: 10px;
    bottom: 40px;
    color: #fff;
    font-size: 12px;
    left: 50%;
    margin-left: -45%;
    opacity: 0.25;
    padding: 10px;
    position: absolute;
    text-align: center;
    transition: all 0.5s ease-in-out;
    transition: opacity 0.35s ease-in-out;
    width: 90%;
  }

  .carousel .carousel-status {
    color: #fff;
    font-size: 10px;
    padding: 5px;
    position: absolute;
    right: 0;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
    top: 0;
  }

  .carousel:hover .slide .legend {
    opacity: 1;
  }
`;

export const DeviceFrame = styled.img`
  display: block;
  max-width: 100%;
  position: relative;
  user-select: none;
  z-index: 2;
  margin: 0 auto;
`;

export const DevicePreview = styled.figure`
  ${overflowYScroll}
  touch-action: pan-y;
  position: absolute;
  background-color: ${palette.greyDark};
  z-index: 1;

  img {
    display: block;
    height: auto;
    width: 100%;
    margin: 0 auto;
  }
`;

export const SlideImage = styled.figure`
  position: relative;
  margin: 0;
  user-select: none;
`;

const createSlideStyles = ({
  imageAspectRatio,
  deviceImgWidthDiff,
  deviceImgHeightDiff,
  deviceImgOffsetTop,
  deviceFrameWidthXs,
  deviceFrameWidthSm,
}: {
  imageAspectRatio: number;
  deviceImgWidthDiff: number;
  deviceImgHeightDiff: number;
  deviceImgOffsetTop: number;
  deviceFrameWidthXs: number;
  deviceFrameWidthSm: number;
}): SimpleInterpolation => css`
  ${DeviceFrame} {
    height: ${rem(deviceFrameWidthXs * imageAspectRatio)};
    width: ${rem(deviceFrameWidthXs)};
  }

  ${DevicePreview} {
    height: ${rem(deviceFrameWidthXs * imageAspectRatio * deviceImgHeightDiff)};
    left: 0;
    margin: 0 auto;
    right: 0;
    top: ${rem(deviceFrameWidthXs * deviceImgOffsetTop)};
    width: ${rem(deviceFrameWidthXs * deviceImgWidthDiff)};
  }

  @media ${mediaQueries.sm} {
    ${DeviceFrame} {
      height: ${rem(deviceFrameWidthSm * imageAspectRatio)};
      width: ${rem(deviceFrameWidthSm)};
    }

    ${DevicePreview} {
      height: ${rem(deviceFrameWidthSm * imageAspectRatio * deviceImgHeightDiff)};
      top: ${rem(deviceFrameWidthSm * deviceImgOffsetTop)};
      width: ${rem(deviceFrameWidthSm * deviceImgWidthDiff)};
    }
  }
`;

export const Slide = styled.div<{ variant: SlideVariant }>`
  ${({ variant }) => {
    switch (variant) {
      case 'desktop':
        return createSlideStyles({
          imageAspectRatio: desktopAspectRatio,
          deviceFrameWidthXs: desktopDeviceFrameWidthXs,
          deviceFrameWidthSm: desktopDeviceFrameWidthSm,
          deviceImgHeightDiff: desktopDeviceImgHeightDiff,
          deviceImgOffsetTop: desktopDeviceImgOffsetTop,
          deviceImgWidthDiff: desktopDeviceImgWidthDiff,
        });
      case 'tablet':
        return createSlideStyles({
          imageAspectRatio: tabletAspectRatio,
          deviceFrameWidthXs: tabletDeviceFrameWidthXs,
          deviceFrameWidthSm: tabletDeviceFrameWidthSm,
          deviceImgHeightDiff: tabletDeviceImgHeightDiff,
          deviceImgOffsetTop: tabletDeviceImgOffsetTop,
          deviceImgWidthDiff: tabletDeviceImgWidthDiff,
        });
      case 'mobile':
      default:
        return createSlideStyles({
          imageAspectRatio: mobileAspectRatio,
          deviceFrameWidthXs: mobileDeviceFrameWidthXs,
          deviceFrameWidthSm: mobileDeviceFrameWidthSm,
          deviceImgHeightDiff: mobileDeviceImgHeightDiff,
          deviceImgOffsetTop: mobileDeviceImgOffsetTop,
          deviceImgWidthDiff: mobileDeviceImgWidthDiff,
        });
    }
  }}
`;
