import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Icon from 'components/Icons/Icons'

import './AboutIcon.scss'

const AboutIcon = ({ iconName, largeIcon }) => {
  const iconClass = classnames({
    'about__section__graphic__icon--large': largeIcon,
    'about__section__graphic__icon': true
  })

  return (
    <div className={iconClass}>
      <Icon glyph={iconName} />
    </div>
  )
} // /const AboutIcon = (iconName)

AboutIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  largeIcon: PropTypes.bool
}

export default AboutIcon
