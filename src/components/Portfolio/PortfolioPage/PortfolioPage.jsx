// React
import React, { PureComponent } from 'react'

// Settings
import { animation } from 'config/animation'

// Styles
// import './PortfolioPage.scss'

// Components
import PortfolioPageHeader from 'components/Portfolio/PortfolioPageHeader/PortfolioPageHeader.jsx'
import PortfolioPageContent from 'components/Portfolio/PortfolioPageContent/PortfolioPageContent.jsx'
import Carousel from 'components/Carousel/Carousel.jsx'

// Images
import imageXL from 'images/portfolio/missfitsnutrition.com-xl.jpg'
// import imageMD from 'images/portfolio/missfitsnutrition.com-md.jpg'
// import imageXS from 'images/portfolio/missfitsnutrition.com-xs.jpg'

class PortfolioPage extends PureComponent {
  componentWillMount () {
    this.setState({
      portfolioItem: {
        id: 1,
        title: 'Vitae maxime',
        url: 'https://google.co.uk/',
        tech: [
          {
            name: 'Shopify',
            icon: 'shopify'
          }
        ]
      } // /portfolioItem
    })
  } // /componentWillMount ()

  render () {
    return (
      <div className="pf-page">
        <PortfolioPageHeader bgImage={imageXL} title={this.state.portfolioItem.title} tech={this.state.portfolioItem.tech}/>

        {/* Content */}
        <PortfolioPageContent>
          {/*
            showArrows
            showStatus
            showIndicators
            showThumbs
            infiniteLoop
            selectedItem
            axis
            onChange
            onClickItem
            onClickThumb
            width
            useKeyboardArrows
            autoPlay
            stopOnHover
            interval
            transitionTime
            swipeScrollTolerance
            direction
            dynamicHeight
            axis
            emulateTouch
            statusFormatter
          */}
          <Carousel showStatus={false} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true} transitionTime={animation.duration} dynamicHeight={true}>
            {[1, 2, 3].map((value, index) =>
              <div key={index}>
                <figure>
                  <img src="https://placehold.it/480x320" alt="" className="w-100" />
                </figure>
              </div>
            )}
          </Carousel>
        </PortfolioPageContent>

        <PortfolioPageContent>
          <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
              <div className="col-12 col-sm-10 col-md-5">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae enim quisquam exercitationem doloremque porro veritatis repellat ea, mollitia maxime, ullam aliquam! Deleniti, blanditiis nostrum.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, deserunt. Iste reiciendis magnam temporibus quidem, quis hic libero molestiae. Cum facere, recusandae reiciendis corrupti ipsa placeat quas explicabo rem debitis quod magnam sequi. Minus pariatur totam, maxime deleniti a ullam cum rem praesentium, minima reiciendis, ad quaerat repudiandae.
                </p>
              </div>
              <div className="col-12 col-sm-10 col-md-5">
                {/* Supporting image 1 */}
                <figure>
                  <img src="https://placehold.it/480x320" srcSet="https://placehold.it/960x640 2x" alt="" className="w-100" />
                </figure>
              </div>
            </div>

            <hr/>

            <div className="text-center mt-2 mt-md-4">
              <a href={this.state.portfolioItem.url} className="btn btn-secondary">Visit {this.state.portfolioItem.title}</a>
            </div>
          </div>

        </PortfolioPageContent>
      </div>
    )
  } // /render()
} // /class PortfolioPage extends Component

export default PortfolioPage
