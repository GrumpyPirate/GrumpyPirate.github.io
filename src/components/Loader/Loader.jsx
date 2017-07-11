import React from 'react'

import Icon from 'components/Icons/Icons'

import './Loader.scss'

export default function Loader () {
  return (
    <div className="loader text-center py-4">
      <figure className="h1 loader__icon">
        <Icon glyph="loader"/>
      </figure>

      <h6 className="h4 mb-0">Loading...</h6>
    </div>
  )
} // /export default
