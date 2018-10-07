import React from 'react'
import PropTypes from 'prop-types'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from '../../reducers'

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
))

const Store = ({ children }) => (
  <Provider store={store}>{children}</Provider>
)

Store.propTypes = {
  children: PropTypes.node.isRequired
}

export default Store
