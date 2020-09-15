import { connect } from 'react-redux';

import { RootState } from 'store';
import { aboutSectionsRequest } from 'store/about/about.actions';

import About from './About.component';
import { AboutProps } from './About.component.types';

const mapDispatchToProps = { aboutSectionsRequest };

const mapStateToProps = (state: RootState): Pick<AboutProps, 'aboutSections' | 'hasFetched'> => ({
  aboutSections: state.about.aboutSections,
  hasFetched: state.about.hasFetched,
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
