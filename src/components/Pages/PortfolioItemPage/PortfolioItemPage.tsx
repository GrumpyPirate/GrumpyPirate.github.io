import isEmpty from 'lodash-es/isEmpty';
import React, { FunctionComponent, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import Button from 'components/Layout/Button/Button';
import Column from 'components/Layout/Column/Column';
import Container from 'components/Layout/Container/Container';
import Row from 'components/Layout/Row/Row';
import Page from 'components/Page/Page';
import PortfolioCarousel from 'components/PortfolioCarousel/PortfolioCarousel';
import PortfolioDeviceLineup from 'components/PortfolioDeviceLineup/PortfolioDeviceLineup';
import PortfolioPageContent from 'components/PortfolioPageContent/PortfolioPageContent';
import PortfolioPageHeader from 'components/PortfolioPageHeader/PortfolioPageHeader';
import { AppDispatch, RootState } from 'store';
import { requestPortfolioItems } from 'store/portfolio/portfolio.actions';

import classes from './PortfolioItemPage.scss';

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
      <div className={classes['portfolio-item-page']}>
        <PortfolioPageHeader
          bgImage={portfolioItem.headerImgSrc}
          title={portfolioItem.title}
          tech={portfolioItem.tech}
        />

        <PortfolioPageContent>
          <Container>
            <Row justify="center">
              <Column spanSM={10}>
                {portfolioItem.supportingImageSrc ? (
                  <Row alignLG="middle">
                    <Column span={12} spanMD="auto" spanXL={6}>
                      <ReactMarkdown source={portfolioItem.description} />
                    </Column>

                    <Column span={12} spanMD={6} spanXL={5} pushXL={1}>
                      <figure className={classes['portfolio-item-page__supporting-image']}>
                        <img src={portfolioItem.supportingImageSrc} alt="" />
                      </figure>
                    </Column>
                  </Row>
                ) : (
                  <ReactMarkdown source={portfolioItem.description} />
                )}

                <hr className={classes['portfolio-item-page__content-divider']} />

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

                <hr className={classes['portfolio-item-page__content-divider']} />

                <div className={classes['portfolio-item-page__external-link']}>
                  <Button to={portfolioItem.url} external secondary>
                    Visit {portfolioItem.title}
                  </Button>
                </div>
              </Column>
            </Row>
          </Container>
        </PortfolioPageContent>
      </div>
    </Page>
  );
};

export default PortfolioItemPage;
