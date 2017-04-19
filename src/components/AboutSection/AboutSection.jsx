// React
import React, { Component } from 'react'

// Components
import Icon from '../Icons/Icons'

// SCSS
import './AboutSection.scss'

// Define AboutSection
class AboutSection extends Component {
  constructor(props) {
    super(props)
  } // /constructor(props)

  render() {
    return (
      <div className="about__section">
        {this.props.icon
          ? <h2 className="h4 about__section__title about__section__title--has-icon">
            {this.props.title}
            <figure className="about__section__title-icon">
              <Icon glyph="laptopMac" />
            </figure>
          </h2>
          : <h2 className="h4 about__section__title">{this.props.title}</h2>
        }

        {this.props.children}
      </div>
    )
  } // /render()
} // /class AboutSection extends React.Component

export default AboutSection
