import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';

import { closeMobileNavigation } from 'store/ui/ui.actions';

import Sitenav from './Sitenav.component';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onNavLinkClick: () => dispatch(closeMobileNavigation()),
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(Sitenav),
);
