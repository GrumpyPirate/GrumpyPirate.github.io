// React
import React, { PureComponent } from 'react'

// Styles
// import './PortfolioPage.scss'

// Components
import PortfolioPageHeader from 'components/Portfolio/PortfolioPageHeader/PortfolioPageHeader.jsx'

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
        tech: [
          'shopify'
        ]
      } // /portfolioItem
    })
  } // /componentWillMount ()

  render () {
    return (
      <div className="pf-page">
        <PortfolioPageHeader bgImage={imageXL} title={this.state.portfolioItem.title} tech={this.state.portfolioItem.tech}/>
      </div>
    )
  } // /render()
} // /class PortfolioPage extends Component

export default PortfolioPage
