import { connect } from 'react-redux';

import { RootState } from 'store';

import Spinner from './Spinner.component';
import { SpinnerProps } from './Spinner.component.types';

const mapStateToProps = (state: RootState): Pick<SpinnerProps, 'isLoading'> => ({
  isLoading: state.portfolio.isFetching,
});

export default connect(mapStateToProps)(Spinner);
