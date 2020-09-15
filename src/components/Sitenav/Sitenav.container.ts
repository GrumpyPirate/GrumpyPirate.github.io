import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';

import { closeMobileNavigation } from 'store/ui/ui.actions';

import Sitenav from './Sitenav.component';
import { SitenavProps } from './Sitenav.component.types';

const mapDispatchToProps = (dispatch: Dispatch): Pick<SitenavProps, 'onNavLinkClick'> => ({
  onNavLinkClick: () => dispatch(closeMobileNavigation()),
});

export default withRouter(connect(null, mapDispatchToProps)(Sitenav));
