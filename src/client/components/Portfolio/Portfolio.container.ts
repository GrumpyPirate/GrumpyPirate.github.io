import { connect } from 'react-redux';

import { requestPortfolioItems } from 'store/portfolio/portfolio.actions';
import { RootState } from 'store';

import Portfolio from './Portfolio.component';

const mapStateToProps = (state: RootState) => ({
  portfolioItems: state.portfolio.portfolioItems,
});

const mapDispatchToProps = { requestPortfolioItems };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Portfolio);
