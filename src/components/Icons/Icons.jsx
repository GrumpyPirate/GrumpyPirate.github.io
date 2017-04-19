// React
import React from 'react'

// SCSS
import './Icons.scss'

// Import icon SVGs. Note that we're using material-design-icons, via NPM.
// material-design-icons
import close     from 'material-design-icons/navigation/svg/production/ic_close_48px.svg'
import laptopMac from 'material-design-icons/hardware/svg/production/ic_laptop_mac_48px.svg'

// devicon
import apple from 'devicon/icons/apple/apple-original.svg'

// App icons
import atom    from './svg/editors/atom.svg'
import sublime from './svg/editors/sublime.svg'

const icons = {
  // material-design-icons
  close,
  laptopMac,
  // devicon
  apple,
  // App
  atom,
  sublime
}

// Component
const Icon = ({glyph, className = 'icon', width = 48, height= 48}) => (
    <svg className={className} width={width} height={height}>
        <use xlinkHref={icons[glyph]} />
    </svg>
)

export default Icon
