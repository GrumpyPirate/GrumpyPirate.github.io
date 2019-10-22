// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export interface IAboutPageSectionFields {
  /** Title */
  title: string;

  /** slug */
  slug: string;

  /** Icons */
  icons?: Record<string, any> | undefined;

  /** Content */
  content: string;

  /** order */
  order: number;
}

/** An individual section for the about page */
export interface IAboutPageSection extends Entry<IAboutPageSectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'aboutPageSection';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IPortfolioItemFields {
  /** title */
  title: string;

  /** url */
  url?: string | undefined;

  /** tech */
  tech?: Record<string, any> | undefined;

  /** Supporting Image */
  supportingImage?: Asset | undefined;

  /** Header Image */
  headerImage: Asset;

  /** Device Previews */
  devicePreviews?: (Asset)[] | undefined;

  /** slug */
  slug: string;

  /** Description */
  description: string;

  /** description-short */
  descriptionShort: string;
}

export interface IPortfolioItem extends Entry<IPortfolioItemFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'portfolioItem';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

type CONTENT_TYPE = 'aboutPageSection' | 'portfolioItem';

type LOCALE_CODE = 'en-GB';

type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-GB';
