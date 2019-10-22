import { connect } from 'react-redux';

import { RootState } from 'store';

import Spinner from './Spinner.component';

const mapStateToProps = (state: RootState) => ({
  isLoading: state.portfolio.isFetching,
});

export default connect(mapStateToProps)(Spinner);
