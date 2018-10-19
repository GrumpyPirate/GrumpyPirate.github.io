import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { closeMobileNavigation } from 'actions/ui/ui';

import Main from 'components/Main/Main';

const mapStateToProps = state => ({
  isLoading: state.about.isFetching || state.portfolio.isFetching,
  isMobileNavigationOpen: state.ui.isMobileNavigationOpen,
});

const mapDispatchToProps = { closeMobileNavigation };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
