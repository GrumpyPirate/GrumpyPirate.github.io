import { connect } from 'react-redux';

import { aboutSectionsRequest } from 'actions/about/about';

import About from 'components/About/About';

const mapDispatchToProps = { aboutSectionsRequest };

const mapStateToProps = state => ({
  aboutSections: state.about.aboutSections,
  hasFetched: state.about.hasFetched,
  error: state.about.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
