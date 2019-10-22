import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { requestPortfolioItems } from 'store/portfolio/portfolio.actions';
import { RootState } from 'store';

import PortfolioPage from './PortfolioPage.component';

const mapStateToProps = (state: RootState, ownProps: any): any => ({
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
