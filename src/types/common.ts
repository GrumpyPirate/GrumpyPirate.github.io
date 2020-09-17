import { ReactNode } from 'react';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { IconGlyph } from 'components/Icon/Icon.types';

export interface ChildrenProps {
  children: ReactNode;
}

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
