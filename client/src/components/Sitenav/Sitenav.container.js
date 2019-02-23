import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { closeMobileNavigation } from 'actions/ui/ui';

import Sitenav from './Sitenav.component';

const mapDispatchToProps = dispatch => ({
  onNavLinkClick: () => dispatch(closeMobileNavigation()),
});

export default withRouter(connect(null, mapDispatchToProps)(Sitenav));
