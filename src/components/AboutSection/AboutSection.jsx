// React
import React from 'react'
import PropTypes from 'prop-types'

// Components
// import Icon from '../Icons/Icons'

// SCSS
import './AboutSection.scss'

// Define AboutSection
const AboutSection = ({ title, children }) => (
  <div className="about__section">
    <h2 className="h3 about__section__title mb-3">{title}</h2>
    {children}
  </div>
)

AboutSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default AboutSection
