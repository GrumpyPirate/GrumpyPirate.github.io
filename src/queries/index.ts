import { gql } from '@apollo/client';

import { IconGlyph, PortfolioItemTech } from 'types/common';

// About
export const GET_ABOUT_SECTIONS = gql`
  query GetAboutSections {
    aboutPageSectionCollection {
      items {
        sys {
          id
        }
        slug
        title
        icons
        content
        order
      }
    }
  }
`;
export type GetAboutSectionsResponse = {
  aboutPageSectionCollection: {
    items: {
      sys: {
        id: string;
      };
      slug: string;
      title: string;
      icons: { name: IconGlyph; large?: boolean }[];
      content: string;
      order: number;
    }[];
  };
};

// Portfolio
export const GET_PORTFOLIO_ITEM_LIST = gql`
  query GetPortfolioItems {
    portfolioItemCollection {
      items {
        title
        headerImage {
          url
        }
        slug
        descriptionShort
        sys {
          id
          firstPublishedAt
        }
      }
    }
  }
`;
export type GetPortfolioItemsResponse = {
  portfolioItemCollection: {
    items: {
      title: string;
      headerImage: {
        url: string;
      };
      slug: string;
      descriptionShort: string;
      sys: {
        id: string;
        firstPublishedAt: string;
      };
    }[];
  };
};

export const GET_PORTFOLIO_ITEM_BY_SLUG = gql`
  query GetPortfolioItemBySlug($slug: String!) {
    portfolioItemCollection(where: { slug: $slug }) {
      items {
        title
        url
        tech
        supportingImage {
          url
        }
        headerImage {
          url
        }
        devicePreviewsCollection {
          items {
            url
          }
        }
        slug
        description
      }
    }
  }
`;
export type GetPortfolioItemBySlugResponse = {
  portfolioItemCollection: {
    items: {
      title: string;
      url: string;
      tech: PortfolioItemTech[];
      supportingImage: { url: string };
      headerImage: { url: string };
      devicePreviewsCollection: {
        items: { url: string }[];
      };
      slug: string;
      description: string;
    }[];
  };
};
