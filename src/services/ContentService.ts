import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

import ContentfulSettings from 'config/contentful';

type ContentfulImageAPIResizeBehavior = 'pad' | 'fill' | 'scale' | 'crop' | 'thumb';
type ContentfulImageAPIFormat = 'jpg' | 'png' | 'webp';

interface ContentfulImageAPIOptions {
  width?: number;
  height?: number;
  resizeBehavior?: ContentfulImageAPIResizeBehavior;
  format?: ContentfulImageAPIFormat;
  quality?: number;
  backgroundColor?: string;
}

class ContentService {
  client: ApolloClient<any>;

  constructor() {
    this.client = new ApolloClient({
      cache: new InMemoryCache(),
      link: createHttpLink({
        uri: `https://graphql.contentful.com/content/v1/spaces/${ContentfulSettings.spaceId}?access_token=${ContentfulSettings.accessToken}`,
      }),
    });
  }

  public static getResizedImage = (
    url: string,
    { format, width, height, resizeBehavior, quality, backgroundColor }: ContentfulImageAPIOptions,
  ): string => {
    let qsSegments: string[] = [];

    // Format
    if (format !== undefined) {
      qsSegments = [...qsSegments, `fm=${format}`];
    }

    // Resizing
    if (width !== undefined) {
      qsSegments = [...qsSegments, `w=${width}`];
    }

    if (height !== undefined) {
      qsSegments = [...qsSegments, `h=${height}`];
    }

    if (resizeBehavior !== undefined) {
      qsSegments = [...qsSegments, `fit=${resizeBehavior}`];
    }

    // Quality
    if (quality !== undefined) {
      qsSegments = [...qsSegments, `q=${quality}`];
    }

    // Background (for `pad` resizing)
    if (backgroundColor !== undefined) {
      qsSegments = [...qsSegments, `bg=${backgroundColor}`];
    }

    return `${url}${qsSegments.length > 0 && `?${qsSegments.join('&')}`}`;
  };
}

export default new ContentService();
export { ContentService };
