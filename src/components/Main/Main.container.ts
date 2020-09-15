import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { RootState } from 'store';
import { closeMobileNavigation } from 'store/ui/ui.actions';

import Main from './Main.component';
import { MainProps } from './Main.component.types';

const mapStateToProps = (
  state: RootState,
): Pick<MainProps, 'isLoading' | 'isMobileNavigationOpen'> => ({
  isLoading: Boolean(state.about.isFetching || state.portfolio.isFetching),
  isMobileNavigationOpen: state.ui.isMobileNavigationOpen,
});

const mapDispatchToProps = { closeMobileNavigation };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
