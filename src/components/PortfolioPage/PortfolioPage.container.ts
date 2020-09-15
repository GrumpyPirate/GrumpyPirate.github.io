import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { RootState } from 'store';
import { requestPortfolioItems } from 'store/portfolio/portfolio.actions';
import { PortfolioItemFormatted } from 'types/common';

import PortfolioPage from './PortfolioPage.component';
import { PortfolioPageProps } from './PortfolioPage.component.types';

const mapStateToProps = (
  state: RootState,
  ownProps: any,
): Pick<PortfolioPageProps, 'portfolioItem' | 'hasFetched'> => ({
  // TODO - support undefined
  portfolioItem: state.portfolio.portfolioItems.find(
    (item) => item.slug === ownProps.match.params.slug,
  ) as PortfolioItemFormatted,
  hasFetched: state.portfolio.hasFetched,
});

const mapDispatchToProps = { requestPortfolioItems };

const PortfolioPageContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PortfolioPage),
);

export default PortfolioPageContainer;
