import { connect } from 'react-redux';

import { requestPortfolioItems } from 'actions/portfolio/portfolio';

import WebDev from 'features/pages/WebDev/components/WebDev';

const mapStateToProps = state => ({
  portfolioItems: state.portfolio.portfolioItems,
});

const mapDispatchToProps = { requestPortfolioItems };

export default connect(mapStateToProps, mapDispatchToProps)(WebDev);
