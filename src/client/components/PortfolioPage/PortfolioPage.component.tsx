import React, { useEffect, FunctionComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import isEmpty from 'lodash-es/isEmpty';

import Container from 'components/Layout/Container/Container.component';
import Row from 'components/Layout/Row/Row.component';
import Column from 'components/Layout/Column/Column.component';
import Button from 'components/Layout/Button/Button.component';
import Page from 'components/Page/Page.component';
import PortfolioPageHeader from 'components/PortfolioPageHeader/PortfolioPageHeader.component';
import PortfolioPageContent from 'components/PortfolioPageContent/PortfolioPageContent.component';
import PortfolioCarousel from 'components/PortfolioCarousel/PortfolioCarousel.component';
import PortfolioDeviceLineup from 'components/PortfolioDeviceLineup/PortfolioDeviceLineup.component';

import { PortfolioPageProps } from './PortfolioPage.component.d';
import classes from './PortfolioPage.component.scss';

const PortfolioPage: FunctionComponent<PortfolioPageProps> = ({
  hasFetched,
  history,
  portfolioItem,
  requestPortfolioItems,
}: PortfolioPageProps) => {
  useEffect(() => {
    const shouldFetchItems = Boolean(isEmpty(portfolioItem) && !hasFetched);

    if (shouldFetchItems) {
      requestPortfolioItems();
    }
  }, [portfolioItem, hasFetched, requestPortfolioItems]);

  useEffect(() => {
    if (hasFetched && isEmpty(portfolioItem)) {
      history.push('/404');
    }
  }, [hasFetched, portfolioItem, history]);

  if (!portfolioItem) return null;

  return (
    <Page>
      <div className={classes['portfolio-page']}>
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
                      <figure className={classes['portfolio-page__supporting-image']}>
                        <img src={portfolioItem.supportingImageSrc} alt="" />
                      </figure>
                    </Column>
                  </Row>
                ) : (
                  <ReactMarkdown source={portfolioItem.description} />
                )}

                <hr className={classes['portfolio-page__content-divider']} />

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

                <hr className={classes['portfolio-page__content-divider']} />

                <div className={classes['portfolio-page__external-link']}>
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

export default PortfolioPage;
