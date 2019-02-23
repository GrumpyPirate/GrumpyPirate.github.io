import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
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

import classes from './PortfolioPage.component.scss';

class PortfolioPage extends Component {
  componentDidMount() {
    this.fetchPortfolioItems();
  }

  componentDidUpdate() {
    const { hasFetched, portfolioItem } = this.props;

    if (hasFetched && isEmpty(portfolioItem)) {
      return <Redirect to="/404" />;
    }
  }

  fetchPortfolioItems() {
    const { portfolioItem, hasFetched, requestPortfolioItems } = this.props;
    const shouldFetchItems = Boolean(isEmpty(portfolioItem) && !hasFetched);

    if (shouldFetchItems) {
      return requestPortfolioItems();
    }
  }

  render() {
    const { portfolioItem } = this.props;
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
                  {portfolioItem.supportingImageSrc
                    ? (
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
                    )
                    : <ReactMarkdown source={portfolioItem.description} />
                  }

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
                    <Button
                      to={portfolioItem.url}
                      external
                      secondary
                    >
                      Visit
                      {' '}
                      {portfolioItem.title}
                    </Button>
                  </div>
                </Column>
              </Row>
            </Container>
          </PortfolioPageContent>
        </div>
      </Page>
    );
  }
}

PortfolioPage.propTypes = {
  portfolioItem: PropTypes.shape({
    description: PropTypes.string.isRequired,
    headerImgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
    supportingImageSrc: PropTypes.string,
    url: PropTypes.string.isRequired,
    previews: PropTypes.shape({
      desktop: PropTypes.string.isRequired,
      tablet: PropTypes.string.isRequired,
      mobile: PropTypes.string.isRequired,
    }).isRequired,
  }),
  hasFetched: PropTypes.bool.isRequired,
  requestPortfolioItems: PropTypes.func.isRequired,
};

PortfolioPage.defaultProps = {
  portfolioItem: null,
};

export default PortfolioPage;
