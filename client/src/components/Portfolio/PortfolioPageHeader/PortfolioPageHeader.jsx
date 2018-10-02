// React
import React from 'react'

// Router
import { Link } from 'react-router-dom'

// PropTypes
import PropTypes from 'prop-types'

// Components
import Icon from 'components/Icons/Icons'

// SCSS
import './PortfolioPageHeader.scss'

const PortfolioPageHeader = (props) => (
  <header className="pf-page-header text-left">
    <figure className="pf-page-header__media">
      <img src={props.bgImage} alt={props.title} />
    </figure>

    <div className="pf-page-header__copy">
      <div>
        <Link to="/webdev" className="pf-page-header__back h6 mb-0">&lt; Portfolio</Link>
      </div>

      <div>
        <h1 className="pf-page-header__title">{props.title}</h1>
      </div>

      <div className="pf-page-header__tech">
        <h2 className="h5 mb-0">Technologies</h2>

        {props.tech.length &&
          <ul className="pf-page-header__tech__list">
            {props.tech.map((techItem, index) => (
              <li key={index}>
                <Icon glyph={techItem.icon} altText={techItem.name} />
              </li>
            ))}
          </ul>
        }
      </div>
    </div>
  </header>
) // /const PortfolioPageHeader

PortfolioPageHeader.propTypes = {
  bgImage: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }))
} // /PortfolioPageHeader.propTypes

export default PortfolioPageHeader
