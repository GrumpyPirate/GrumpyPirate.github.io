import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import PageHeader from 'components/PageHeader/PageHeader';
import PageHeaderSubtitle from 'components/PageHeaderSubtitle/PageHeaderSubtitle';
import PortfolioList from 'features/portfolio/PortfolioList/containers/PortfolioList';

import './WebDev.scss';

class WebDev extends PureComponent {
  componentDidMount() {
    const { requestPortfolioItems } = this.props;
    requestPortfolioItems();
  }

  render() {
    const { portfolioItems } = this.props;

    return (
      <Fragment>
        <PageHeader title="Portfolio">
          <PageHeaderSubtitle>
            Stuff I've worked on
          </PageHeaderSubtitle>
        </PageHeader>

        <section className="portfolio">
          {!!portfolioItems.length && <PortfolioList />}
        </section>
      </Fragment>
    );
  }
}

WebDev.propTypes = {
  requestPortfolioItems: PropTypes.func.isRequired,
  portfolioItems: PropTypes.arrayOf(PropTypes.object),
};

WebDev.defaultProps = {
  portfolioItems: [],
};

export default WebDev;
