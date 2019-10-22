import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { requestPortfolioItems } from 'actions/portfolio/portfolio';

import PortfolioPage from './PortfolioPage.component';

const mapStateToProps = (state, ownProps) => ({
  portfolioItem: state.portfolio.portfolioItems.find(
    item => item.slug === ownProps.match.params.slug,
  ),
  hasFetched: state.portfolio.hasFetched,
});

const mapDispatchToProps = { requestPortfolioItems };

const PortfolioPageContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PortfolioPage),
);

export default PortfolioPageContainer;
