import isEmpty from 'lodash/isEmpty';
import React, { FunctionComponent, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import Button from 'components/Button/Button';
import { Column, Container, Row } from 'components/Grid';
import Page from 'components/Page/Page';
import PortfolioCarousel from 'components/PortfolioCarousel/PortfolioCarousel';
import PortfolioDeviceLineup from 'components/PortfolioDeviceLineup/PortfolioDeviceLineup';
import PortfolioPageHeader from 'components/PortfolioPageHeader/PortfolioPageHeader';
import { AppDispatch, RootState } from 'store';
import { requestPortfolioItems } from 'store/portfolio/portfolio.actions';

import {
  Content,
  ContentDivider,
  ExternalLinkWrapper,
  SupportingImage,
} from './PortfolioItemPage.constants';

const PortfolioItemPage: FunctionComponent = () => {
  const { slug } = useParams<{ slug: string }>();
  const history = useHistory();
  const { portfolioItem, hasFetched } = useSelector((state: RootState) => ({
    portfolioItem: state.portfolio.portfolioItems.find((item) => item.slug === slug),
    hasFetched: state.portfolio.hasFetched,
  }));
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const shouldFetchItems = Boolean(isEmpty(portfolioItem) && !hasFetched);

    if (shouldFetchItems) {
      dispatch(requestPortfolioItems());
    }
  }, [dispatch, hasFetched, portfolioItem]);

  useEffect(() => {
    if (hasFetched && isEmpty(portfolioItem)) {
      history.push('/404');
    }
  }, [hasFetched, portfolioItem, history]);

  if (!portfolioItem) return null;

  return (
    <Page>
      <div>
        <PortfolioPageHeader
          bgImage={portfolioItem.headerImgSrc}
          title={portfolioItem.title}
          tech={portfolioItem.tech}
        />

        <Content>
          <Container>
            <Row xAlign="center">
              <Column sm={10}>
                {portfolioItem.supportingImageSrc ? (
                  <Row yAlign="top">
                    <Column xs={12} md={6} xl={6}>
                      <ReactMarkdown source={portfolioItem.description} />
                    </Column>

                    <Column xs={12} md={6} xl={5} pushXl={1}>
                      <SupportingImage>
                        <img src={portfolioItem.supportingImageSrc} alt="" />
                      </SupportingImage>
                    </Column>
                  </Row>
                ) : (
                  <ReactMarkdown source={portfolioItem.description} />
                )}

                <ContentDivider />

                <PortfolioCarousel
                  desktopImage={portfolioItem.previews.desktop}
                  tabletImage={portfolioItem.previews.tablet}
                  mobileImage={portfolioItem.previews.mobile}
                />

                <PortfolioDeviceLineup
                  desktopImage={portfolioItem.previews.desktop}
                  tabletImage={portfolioItem.previews.tablet}
                  mobileImage={portfolioItem.previews.mobile}
                />

                <ContentDivider />

                <ExternalLinkWrapper>
                  <Button to={portfolioItem.url} external secondary>
                    Visit {portfolioItem.title}
                  </Button>
                </ExternalLinkWrapper>
              </Column>
            </Row>
          </Container>
        </Content>
      </div>
    </Page>
  );
};

export default PortfolioItemPage;
