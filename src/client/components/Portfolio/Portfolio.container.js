import { connect } from 'react-redux';

import { requestPortfolioItems } from 'actions/portfolio/portfolio';

import Portfolio from './Portfolio.component';

const mapStateToProps = state => ({
  portfolioItems: state.portfolio.portfolioItems,
});

const mapDispatchToProps = { requestPortfolioItems };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Portfolio);
