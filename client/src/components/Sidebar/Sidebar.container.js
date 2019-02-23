import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { toggleMobileNavigation } from 'actions/ui/ui';

import Sidebar from './Sidebar.component';

const mapStateToProps = state => ({
  isMobileNavigationOpen: state.ui.isMobileNavigationOpen,
});

const mapDispatchToProps = { toggleMobileNavigation };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));
