import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

import Carousel from 'components/Carousel/Carousel';
import animation from 'config/animation';
import frameLaptop from 'images/device-frames/frame-laptop.svg';
import frameMobile from 'images/device-frames/frame-mobile.svg';
import frameTablet from 'images/device-frames/frame-tablet.svg';

import classes from './PortfolioCarousel.scss';
import { PortfolioCarouselProps } from './PortfolioCarousel.types';

const PortfolioCarousel: FunctionComponent<PortfolioCarouselProps> = ({
  desktopImage,
  tabletImage,
  mobileImage,
}) => (
  <div className={classes['portfolio-carousel']}>
    <Carousel
      showStatus={false}
      showThumbs={false}
      infiniteLoop
      useKeyboardArrows
      transitionTime={animation.duration * 2}
      dynamicHeight
      showArrows={false}
      emulateTouch
      swipeScrollTolerance={75}
    >
      <div
        className={classnames(
          classes['portfolio-carousel__slide'],
          classes['portfolio-carousel__slide--mobile'],
        )}
      >
        <figure
          className={classnames(
            classes['portfolio-carousel__figure'],
            classes['portfolio-carousel__figure--mobile'],
          )}
        >
          <img src={frameMobile} className={classes['portfolio-carousel__device-frame']} alt="" />
          <div
            className={classnames(
              classes['portfolio-carousel__device-img'],
              classes['portfolio-carousel__device-img--mobile'],
            )}
          >
            <img src={mobileImage} alt="" />
          </div>
        </figure>
      </div>

      <div
        className={classnames(
          classes['portfolio-carousel__slide'],
          classes['portfolio-carousel__slide--tablet'],
        )}
      >
        <figure
          className={classnames(
            classes['portfolio-carousel__figure'],
            classes['portfolio-carousel__figure--tablet'],
          )}
        >
          <img src={frameTablet} className={classes['portfolio-carousel__device-frame']} alt="" />
          <div
            className={classnames(
              classes['portfolio-carousel__device-img'],
              classes['portfolio-carousel__device-img--tablet'],
            )}
          >
            <img src={tabletImage} alt="" />
          </div>
        </figure>
      </div>
      <div
        className={classnames(
          classes['portfolio-carousel__slide'],
          classes['portfolio-carousel__slide--desktop'],
        )}
      >
        <figure
          className={classnames(
            classes['portfolio-carousel__figure'],
            classes['portfolio-carousel__figure--desktop'],
          )}
        >
          <img src={frameLaptop} className={classes['portfolio-carousel__device-frame']} alt="" />
          <div
            className={classnames(
              classes['portfolio-carousel__device-img'],
              classes['portfolio-carousel__device-img--desktop'],
            )}
          >
            <img src={desktopImage} alt="" />
          </div>
        </figure>
      </div>
    </Carousel>
  </div>
);

export default PortfolioCarousel;
