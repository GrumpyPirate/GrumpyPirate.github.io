// React
import React, { PureComponent } from 'react'

// Styles
// import './PortfolioPage.scss'

// Components
import PortfolioPageHeader from 'components/Portfolio/PortfolioPageHeader/PortfolioPageHeader.jsx'

// Images
import imageXL from 'images/portfolio/missfitsnutrition.com-xl.jpg'
import imageMD from 'images/portfolio/missfitsnutrition.com-md.jpg'
import imageXS from 'images/portfolio/missfitsnutrition.com-xs.jpg'

class PortfolioPage extends PureComponent {
  componentWillMount () {
    this.setState({
      portfolioItem: {
        id: 1,
        title: 'Consectetur adipisicing elit'
      }
    })
  }

  render () {
    return (
      <div className="pf-page">
        <PortfolioPageHeader bgImage={imageXL} title="MissFits Nutrition"/>
      </div>
    )
  } // /render()
} // /class PortfolioPage extends Component

export default PortfolioPage
