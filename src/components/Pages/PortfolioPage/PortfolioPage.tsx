import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Container } from 'components/Grid';
import Page from 'components/Page/Page';
import PageContent from 'components/PageContent/PageContent';
import PageHeader from 'components/PageHeader/PageHeader';
import PageHeaderSubtitle from 'components/PageHeaderSubtitle/PageHeaderSubtitle';
import Heading from 'components/Typography/Heading/Heading';
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
              {portfolioItems.map((item) => (
                <ListItem key={`portfolio__list-item--${item.slug}--${item.id}`}>
                  <Link to={`/portfolio/${item.slug}`} role="listitem">
                    <ListItemImage>
                      <img src={item.headerImgSrc} alt="" />
                    </ListItemImage>

                    <ListItemCopy>
                      <Heading level={3} displayLevel={5} text={item.title} />

                      <ListItemDescription>{item.descriptionShort}</ListItemDescription>
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
