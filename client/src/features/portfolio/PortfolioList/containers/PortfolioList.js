import { connect } from 'react-redux';

import PortfolioList from '../components/PortfolioList';

const mapStateToProps = state => ({
  portfolioItems: state.portfolio.portfolioItems,
});

export default connect(mapStateToProps)(PortfolioList);
