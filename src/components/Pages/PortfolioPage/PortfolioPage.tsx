import React, { Fragment, FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Container } from 'components/Grid';
import LoadableImage from 'components/LoadableImage/LoadableImage';
import Page from 'components/Page/Page';
import PageContent from 'components/PageContent/PageContent';
import PageHeader from 'components/PageHeader/PageHeader';
import PageHeaderSubtitle from 'components/PageHeaderSubtitle/PageHeaderSubtitle';
import Heading from 'components/Typography/Heading/Heading';
import { ContentService } from 'services/ContentService';
import { AppDispatch, RootState } from 'store';
import { getPortfolioItems } from 'store/portfolio';
import { ClassNameProps } from 'types/common';

import {
  List,
  ListItem,
  ListItemCopy,
  ListItemDescription,
  ListItemImage,
} from './PortfolioPage.constant';

const PortfolioPage: FunctionComponent<ClassNameProps> = ({ className }) => {
  const portfolioItems = useSelector((state: RootState) => state.portfolio.portfolioItems);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (portfolioItems.length === 0) {
      dispatch(getPortfolioItems());
    }
  }, [dispatch, portfolioItems.length]);

  return (
    <Page className={className}>
      <PageHeader title="Portfolio">
        <PageHeaderSubtitle>Projects I&apos;ve worked on</PageHeaderSubtitle>
      </PageHeader>

      <PageContent>
        {portfolioItems.length > 0 && (
          <Container>
            <List>
              {portfolioItems.map(({ id, slug, headerImgSrc, title, descriptionShort }) => (
                <ListItem key={`portfolio__list-item--${slug}--${id}`}>
                  <Link to={`/portfolio/${slug}`} role="listitem">
                    <ListItemImage>
                      <picture>
                        {[360, 600].map((imageSize) => (
                          <Fragment key={`list-item--${id}__image--size-${imageSize}`}>
                            <source
                              type="image/webp"
                              srcSet={`${ContentService.getResizedImage(headerImgSrc, {
                                format: 'webp',
                                width: imageSize,
                              })} ${imageSize}w, ${ContentService.getResizedImage(headerImgSrc, {
                                format: 'webp',
                                width: imageSize * 2,
                              })} ${imageSize * 2}w`}
                              sizes={`${imageSize}px`}
                            />
                            <source
                              type="image/jpeg"
                              srcSet={`${ContentService.getResizedImage(headerImgSrc, {
                                format: 'jpg',
                                width: imageSize,
                              })} ${imageSize}w, ${ContentService.getResizedImage(headerImgSrc, {
                                format: 'jpg',
                                width: imageSize * 2,
                              })} ${imageSize * 2}w`}
                              sizes={`${imageSize}px`}
                            />
                          </Fragment>
                        ))}

                        <LoadableImage loading="lazy" src={headerImgSrc} alt="" />
                      </picture>
                    </ListItemImage>

                    <ListItemCopy>
                      <Heading level={3} displayLevel={5} text={title} />

                      <ListItemDescription>{descriptionShort}</ListItemDescription>
                    </ListItemCopy>
                  </Link>
                </ListItem>
              ))}
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
