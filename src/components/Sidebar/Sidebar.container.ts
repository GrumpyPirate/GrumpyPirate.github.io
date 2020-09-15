import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { RootState } from 'store';
import { toggleMobileNavigation } from 'store/ui/ui.actions';

import Sidebar from './Sidebar.component';
import { SidebarProps } from './Sidebar.component.types';

const mapStateToProps = (state: RootState): Pick<SidebarProps, 'isMobileNavigationOpen'> => ({
  isMobileNavigationOpen: state.ui.isMobileNavigationOpen,
});

const mapDispatchToProps = { toggleMobileNavigation };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));
