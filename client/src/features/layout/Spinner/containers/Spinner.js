import { connect } from 'react-redux'

import Spinner from '../components/Spinner';

const mapStateToProps = state => ({
  isLoading: state.portfolio.isFetching
})

export default connect(mapStateToProps)(Spinner)
