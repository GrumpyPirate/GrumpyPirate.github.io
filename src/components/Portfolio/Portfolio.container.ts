import { connect } from 'react-redux';

import { RootState } from 'store';
import { requestPortfolioItems } from 'store/portfolio/portfolio.actions';

import Portfolio from './Portfolio.component';
import { PortfolioProps } from './Portfolio.component.types';

const mapStateToProps = (state: RootState): Pick<PortfolioProps, 'portfolioItems'> => ({
  portfolioItems: state.portfolio.portfolioItems,
});

const mapDispatchToProps = { requestPortfolioItems };

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
