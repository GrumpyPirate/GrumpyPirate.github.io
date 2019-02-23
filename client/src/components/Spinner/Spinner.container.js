import { connect } from 'react-redux';

import Spinner from './Spinner.component';

const mapStateToProps = state => ({
  isLoading: state.portfolio.isFetching,
});

export default connect(mapStateToProps)(Spinner);
