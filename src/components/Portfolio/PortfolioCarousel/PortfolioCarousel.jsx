import React from 'react'

// Components
import Carousel from 'components/Carousel/Carousel.jsx'

// Style
import './PortfolioCarousel.scss'

// images
import frameLaptop from './frame-laptop.svg'
import frameTablet from './frame-tablet.svg'
import frameMobile from './frame-mobile.svg'

// Settings
import { animation } from 'config/animation'

const PortfolioCarousel = ({ desktop, tablet, mobile }) => {
  return (
    <div className="pf-carousel mb-2">
      <Carousel showStatus={false} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true} transitionTime={animation.duration} dynamicHeight={true} showArrows={false}>
          {desktop &&
            <div className="pf-carousel__slide pf-carousel__slide--desktop">
              <figure className="pf-carousel__figure pf-carousel__figure--desktop">
                <img src={frameLaptop} className="pf-carousel__device-frame"/>
                <div className="pf-carousel__device-img pf-carousel__device-img--desktop">
                  <img src={desktop} alt="" />
                </div>
              </figure>

              <h5>Desktop</h5>
            </div>
          }
          {tablet &&
            <div className="pf-carousel__slide pf-carousel__slide--tablet">
              <figure className="pf-carousel__figure pf-carousel__figure--tablet">
                <img src={frameTablet} className="pf-carousel__device-frame"/>
                <div className="pf-carousel__device-img pf-carousel__device-img--tablet">
                  <img src={tablet} alt="" />
                </div>
              </figure>

              <h5>Tablet</h5>
            </div>
          }
          {mobile &&
            <div className="pf-carousel__slide pf-carousel__slide--mobile">
              <figure className="pf-carousel__figure pf-carousel__figure--mobile">
                <img src={frameMobile} className="pf-carousel__device-frame"/>
                <div className="pf-carousel__device-img pf-carousel__device-img--mobile">
                  <img src={mobile} alt="" />
                </div>
              </figure>

              <h5>Mobile</h5>
            </div>
          }
      </Carousel>
    </div>
  )
} // /const PortfolioCarousel

export default PortfolioCarousel
