import { connect } from 'react-redux';

import { RootState } from 'store';
import { aboutSectionsRequest } from 'store/about/about.actions';

import About from './About.component';

const mapDispatchToProps = { aboutSectionsRequest };

const mapStateToProps = (state: RootState) => ({
  aboutSections: state.about.aboutSections,
  hasFetched: state.about.hasFetched,
  error: state.about.error,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(About);
