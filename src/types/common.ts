import { Action, ThunkAction } from '@reduxjs/toolkit';

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

export interface AboutSectionFormatted {
  id: string;
  title: string;
  icons?: AboutSectionIcon[];
  slug: string;
  content: string;
  order: number;
}

export interface PortfolioItemTech {
  icon: IconGlyph;
  name: string;
}

export interface PortfolioItemFormatted {
  id: string;
  slug: string;
  title: string;
  descriptionShort: string;
  description: string;
  url: string;
  tech: PortfolioItemTech[];
  supportingImageSrc: string;
  headerImgSrc: string;
  previews: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  createdAt: string;
}

export type AppThunk = ThunkAction<void, any, unknown, Action<string>>;
export interface GenericActionError {
  message?: string;
}
