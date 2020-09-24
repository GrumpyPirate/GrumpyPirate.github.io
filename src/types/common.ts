export interface ClassNameProps {
  className?: string;
}

export type IconGlyph =
  | 'airplay'
  | 'angular'
  | 'babel'
  | 'bootstrap'
  | 'bulma'
  | 'chevron-down'
  | 'chevron-left'
  | 'contentful'
  | 'divio'
  | 'django'
  | 'foundation'
  | 'grunt'
  | 'gulp'
  | 'hash'
  | 'heart'
  | 'html5'
  | 'illustrator'
  | 'image'
  | 'invision'
  | 'javascript'
  | 'laravel'
  | 'loader'
  | 'nextjs'
  | 'photoshop'
  | 'postcss'
  | 'react'
  | 'reactivex'
  | 'redux'
  | 'sass'
  | 'shopify'
  | 'sketch'
  | 'storybook'
  | 'styled-components'
  | 'typescript'
  | 'webpack';

export interface AboutSectionIcon {
  name: IconGlyph;
  large?: boolean;
}

export interface PortfolioItemTech {
  icon: IconGlyph;
  name: string;
}
