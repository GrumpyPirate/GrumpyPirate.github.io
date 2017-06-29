// React
import React, { Component } from 'react'

// Components
// import Icon from '../Icons/Icons'

// SCSS
import './AboutSection.scss'

// Define AboutSection
class AboutSection extends Component {
  constructor(props) {
    super(props)
  } // /constructor(props)

  render () {
    return (
      <div className="about__section">
        <h2 className="h3 about__section__title mb-3">{this.props.title}</h2>

        {this.props.children}
      </div>
    )
  } // /render ()
} // /class AboutSection extends React.Component

export default AboutSection
