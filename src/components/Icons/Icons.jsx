// React
import React from 'react'

// SCSS
import './Icons.scss'

// Import icon SVGs. Note that we're using material-design-icons, via NPM.
// material-design-icons
import close                from 'material-design-icons/navigation/svg/production/ic_close_48px.svg'
import laptopMac            from 'material-design-icons/hardware/svg/production/ic_laptop_mac_48px.svg'
import code                 from 'material-design-icons/action/svg/production/ic_code_48px.svg'
import settingsApplications from 'material-design-icons/action/svg/production/ic_settings_applications_48px.svg'
import palette              from 'material-design-icons/image/svg/production/ic_palette_48px.svg'

// App icons
import apple       from './svg/brands/apple.svg'
import atom        from './svg/editors/atom.svg'
import sublime     from './svg/editors/sublime.svg'

import javascript  from './svg/development/js/javascript.svg'
import babel       from './svg/development/js/babel.svg'
import react       from './svg/development/js/react.svg'
import angular     from './svg/development/js/angular.svg'
import express     from './svg/development/js/express.svg'
import nodejs      from './svg/development/js/nodejs.svg'
import redux       from './svg/development/js/redux.svg'

import webpack     from './svg/development/devtool/webpack.svg'
import gulp        from './svg/development/devtool/gulp.svg'
import grunt       from './svg/development/devtool/grunt.svg'

import sass        from './svg/development/css/sass.svg'
import less        from './svg/development/css/less.svg'
import bootstrap   from './svg/development/css/bootstrap.svg'
import foundation  from './svg/development/css/foundation.svg'
import bulma       from './svg/development/css/bulma.svg'

import html5       from './svg/development/html5.svg'
import django      from './svg/development/django.svg'
import laravel     from './svg/development/laravel.svg'

import photoshop   from './svg/design/photoshop.svg'
import illustrator from './svg/design/illustrator.svg'
import sketch      from './svg/design/sketch.svg'


const icons = {
  // material-design-icons
  close,
  laptopMac,
  code,
  settingsApplications,
  palette,
  // App
  atom,
  sublime,
  apple,
  html5,
  javascript,
  babel,
  sass,
  less,
  webpack,
  gulp,
  grunt,
  bootstrap,
  foundation,
  django,
  react,
  laravel,
  angular,
  photoshop,
  sketch,
  illustrator
} // /const icons

// Component
const Icon = ({glyph, className = 'icon', width = 48, height= 48}) => (
    <svg className={className} width={width} height={height}>
        <use xlinkHref={icons[glyph]} />
    </svg>
)

export default Icon
