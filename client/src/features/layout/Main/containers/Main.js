import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Main from '../components/Main'

const mapStateToProps = state => ({
  isLoading: state.portfolio.isFetching
})

export default withRouter(connect(mapStateToProps)(Main))
