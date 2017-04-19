// React
import React from 'react'

// SCSS
import './Icons.scss'

// Import icon SVGs. Note that we're using material-design-icons, via NPM.
// material-design-icons
import close     from 'material-design-icons/navigation/svg/production/ic_close_48px.svg'
import laptopMac from 'material-design-icons/hardware/svg/production/ic_laptop_mac_48px.svg'
import code      from 'material-design-icons/action/svg/production/ic_code_48px.svg'
import palette   from 'material-design-icons/image/svg/production/ic_palette_48px.svg'

// App icons
import apple       from './svg/brands/apple.svg'
import atom        from './svg/editors/atom.svg'
import sublime     from './svg/editors/sublime.svg'
import html5       from './svg/development/html5.svg'
import javascript  from './svg/development/javascript.svg'
import sass        from './svg/development/sass.svg'
import less        from './svg/development/less.svg'
import photoshop   from './svg/design/photoshop.svg'
import illustrator from './svg/design/illustrator.svg'

const icons = {
  // material-design-icons
  close,
  laptopMac,
  code,
  palette,
  // App
  atom,
  sublime,
  apple,
  html5,
  javascript,
  sass,
  less,
  photoshop,
  illustrator
} // /const icons

// Component
const Icon = ({glyph, className = 'icon', width = 48, height= 48}) => (
    <svg className={className} width={width} height={height}>
        <use xlinkHref={icons[glyph]} />
    </svg>
)

export default Icon
