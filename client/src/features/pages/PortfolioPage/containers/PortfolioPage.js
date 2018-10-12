import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { requestPortfolioItems } from 'actions/portfolio/portfolio';

import PortfolioPage from '../components/PortfolioPage';

const mapStateToProps = (state, ownProps) => ({
  portfolioItem: state.portfolio.portfolioItems
    .find(item => item.slug === ownProps.match.params.slug),
  hasFetched: state.portfolio.hasFetched,
});

const mapDispatchToProps = { requestPortfolioItems };

const PortfolioPageContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PortfolioPage));

PortfolioPageContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PortfolioPageContainer;
