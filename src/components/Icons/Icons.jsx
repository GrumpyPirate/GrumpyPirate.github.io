// React
import React, { Component } from 'react'

// SCSS
import './Icons.scss'

// Import icon SVGs
import close from './svg/close.svg'

const icons = {
  close
}

// Component
const Icon = ({glyph, className = 'icon', width = 32, height= 32}) => (
    <svg className={className} width={width} height={height}>
        <use xlinkHref={icons[glyph]} />
    </svg>
)

export default Icon
