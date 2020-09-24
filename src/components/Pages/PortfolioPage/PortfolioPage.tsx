import { useQuery } from '@apollo/client';
import React, { Fragment, FunctionComponent, useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Container } from 'components/Grid';
import LoadableImage from 'components/LoadableImage/LoadableImage';
import Page from 'components/Page/Page';
import PageContent from 'components/PageContent/PageContent';
import PageHeader from 'components/PageHeader/PageHeader';
import PageHeaderSubtitle from 'components/PageHeaderSubtitle/PageHeaderSubtitle';
import Spinner from 'components/Spinner/Spinner';
import Heading from 'components/Typography/Heading/Heading';
import { GET_PORTFOLIO_ITEM_LIST, GetPortfolioItemListResponse } from 'queries';
import { ContentService } from 'services/ContentService';
import { ClassNameProps } from 'types/common';

import {
  List,
  ListItem,
  ListItemCopy,
  ListItemDescription,
  ListItemImage,
} from './PortfolioPage.constants';

const PortfolioPage: FunctionComponent<ClassNameProps> = ({ className }) => {
  const { data, loading } = useQuery<GetPortfolioItemListResponse>(GET_PORTFOLIO_ITEM_LIST);

  const formattedPortfolioItems = useMemo(
    () =>
      !data
        ? []
        : [...data.portfolioItemCollection.items].sort(
            (itemA, itemB) =>
              new Date(itemB.sys.firstPublishedAt).getTime() -
              new Date(itemA.sys.firstPublishedAt).getTime(),
          ),
    [data],
  );

  return (
    <Page className={className}>
      <PageHeader title="Portfolio">
        <PageHeaderSubtitle>Projects I&apos;ve worked on</PageHeaderSubtitle>
      </PageHeader>

      <PageContent>
        {loading && <Spinner />}
        {formattedPortfolioItems.length > 0 && (
          <Container>
            <List>
              {formattedPortfolioItems.map(
                ({
                  sys: { id },
                  slug,
                  headerImage: { url: headerImageUrl },
                  title,
                  descriptionShort,
                }) => (
                  <ListItem
                    key={`portfolio-page__list__item--${slug}--${id}`}
                    data-testid="portfolio-page__list__item"
                  >
                    <Link to={`/portfolio/${slug}`} role="listitem">
                      <ListItemImage>
                        <picture>
                          {[360, 600].map((imageSize) => (
                            <Fragment key={`list-item--${id}__image--size-${imageSize}`}>
                              <source
                                type="image/webp"
                                srcSet={`${ContentService.getResizedImage(headerImageUrl, {
                                  format: 'webp',
                                  width: imageSize,
                                })} ${imageSize}w, ${ContentService.getResizedImage(
                                  headerImageUrl,
                                  {
                                    format: 'webp',
                                    width: imageSize * 2,
                                  },
                                )} ${imageSize * 2}w`}
                                sizes={`${imageSize}px`}
                              />
                              <source
                                type="image/jpeg"
                                srcSet={`${ContentService.getResizedImage(headerImageUrl, {
                                  format: 'jpg',
                                  width: imageSize,
                                })} ${imageSize}w, ${ContentService.getResizedImage(
                                  headerImageUrl,
                                  {
                                    format: 'jpg',
                                    width: imageSize * 2,
                                  },
                                )} ${imageSize * 2}w`}
                                sizes={`${imageSize}px`}
                              />
                            </Fragment>
                          ))}

                          <LoadableImage loading="lazy" src={headerImageUrl} alt="" />
                        </picture>
                      </ListItemImage>

                      <ListItemCopy>
                        <Heading level={3} displayLevel={5} text={title} />

                        <ListItemDescription>{descriptionShort}</ListItemDescription>
                      </ListItemCopy>
                    </Link>
                  </ListItem>
                ),
              )}
            </List>
          </Container>
        )}
      </PageContent>
    </Page>
  );
};

export default styled(PortfolioPage)`
  ${PageContent} {
    padding-top: 0;
  }
`;
