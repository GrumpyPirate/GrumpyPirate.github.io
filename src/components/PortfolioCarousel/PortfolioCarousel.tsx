import React, { FunctionComponent } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

import LoadableImage from 'components/LoadableImage/LoadableImage';
import frameLaptop from 'images/device-frames/frame-laptop.svg';
import frameMobile from 'images/device-frames/frame-mobile.svg';
import frameTablet from 'images/device-frames/frame-tablet.svg';
import { ContentService } from 'services/ContentService';
import { animDur, mediaQueries } from 'styles';

import {
  carouselStyles,
  DeviceFrame,
  DevicePreview,
  Slide,
  SlideImage,
} from './PortfolioCarousel.constants';
import { PortfolioCarouselProps } from './PortfolioCarousel.types';

const PortfolioCarousel: FunctionComponent<PortfolioCarouselProps> = function ({
  className,
  desktopImage,
  tabletImage,
  mobileImage,
}) {
  return (
    <div className={className}>
      <Carousel
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        useKeyboardArrows
        transitionTime={animDur * 2}
        dynamicHeight
        showArrows={false}
        emulateTouch
        swipeScrollTolerance={25}
      >
        <Slide variant="mobile">
          <SlideImage>
            <DeviceFrame src={frameMobile} alt="" />
            <DevicePreview>
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${ContentService.getResizedImage(mobileImage, {
                    format: 'webp',
                    width: 166,
                  })} 166w, ${ContentService.getResizedImage(mobileImage, {
                    format: 'webp',
                    width: 332,
                  })} 332w`}
                  sizes="166px"
                />
                <source
                  type="image/jpeg"
                  srcSet={`${ContentService.getResizedImage(mobileImage, {
                    format: 'jpg',
                    width: 166,
                  })} 166w, ${ContentService.getResizedImage(mobileImage, {
                    format: 'jpg',
                    width: 332,
                  })} 332w`}
                  sizes="166px"
                />

                <LoadableImage loading="lazy" src={mobileImage} alt="" />
              </picture>
            </DevicePreview>
          </SlideImage>
        </Slide>

        <Slide variant="tablet">
          <DeviceFrame src={frameTablet} alt="" />
          <DevicePreview>
            <picture>
              <source
                type="image/webp"
                srcSet={`${ContentService.getResizedImage(tabletImage, {
                  format: 'webp',
                  width: 200,
                })} 200w, ${ContentService.getResizedImage(tabletImage, {
                  format: 'webp',
                  width: 400,
                })} 400w`}
                sizes="200px"
              />
              <source
                type="image/jpeg"
                srcSet={`${ContentService.getResizedImage(tabletImage, {
                  format: 'jpg',
                  width: 200,
                })} 200w, ${ContentService.getResizedImage(tabletImage, {
                  format: 'jpg',
                  width: 400,
                })} 400w`}
                sizes="200px"
              />
              <LoadableImage loading="lazy" src={tabletImage} alt="" />
            </picture>
          </DevicePreview>
        </Slide>

        <Slide variant="desktop">
          <DeviceFrame src={frameLaptop} alt="" />
          <DevicePreview>
            <picture>
              <source
                type="image/webp"
                srcSet={`${ContentService.getResizedImage(desktopImage, {
                  format: 'webp',
                  width: 218,
                })} 218w, ${ContentService.getResizedImage(desktopImage, {
                  format: 'webp',
                  width: 436,
                })} 436w`}
                sizes="218px"
              />
              <source
                type="image/jpeg"
                srcSet={`${ContentService.getResizedImage(desktopImage, {
                  format: 'jpg',
                  width: 218,
                })} 218w, ${ContentService.getResizedImage(desktopImage, {
                  format: 'jpg',
                  width: 436,
                })} 436w`}
                sizes="218px"
              />
              <LoadableImage loading="lazy" src={desktopImage} alt="" />
            </picture>
          </DevicePreview>
        </Slide>
      </Carousel>
    </div>
  );
};

export default styled(PortfolioCarousel)`
  ${carouselStyles}

  @media ${mediaQueries.md} {
    display: none;
  }
`;
