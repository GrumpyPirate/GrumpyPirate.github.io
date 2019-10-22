import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { closeMobileNavigation } from 'store/ui/ui.actions';
import { RootState } from 'store';

import Main from './Main.component';

const mapStateToProps = (state: RootState) => ({
  isLoading: Boolean(state.about.isFetching || state.portfolio.isFetching),
  isMobileNavigationOpen: state.ui.isMobileNavigationOpen,
});

const mapDispatchToProps = { closeMobileNavigation };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Main),
);
