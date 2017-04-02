// React
import React, { Component } from 'react'

// SCSS
import './Icons.scss'

// SVGStore plugin - load all SVGs
const __svg__ = {
    path: './svg/**/*.svg',
    name: 'images/svg-sprite/[hash].logos.svg'
}
require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);

// Component
const Icon = ({glyph, className = 'icon'}) => (
    <svg className={className}>
        <use xlinkHref={`#icon-${glyph}`} />
    </svg>
)

export default Icon
