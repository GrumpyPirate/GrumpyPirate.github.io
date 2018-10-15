import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Sitenav from 'components/Sitenav/Sitenav';

import { closeMobileNavigation } from 'actions/ui/ui';

const mapDispatchToProps = dispatch => ({
  onNavLinkClick: () => dispatch(closeMobileNavigation()),
});

export default withRouter(connect(null, mapDispatchToProps)(Sitenav));
