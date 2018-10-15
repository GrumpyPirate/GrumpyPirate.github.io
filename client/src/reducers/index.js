import { combineReducers } from 'redux'

import portfolio from './portfolio/portfolio'
import ui from './ui/ui'

const rootReducer = combineReducers({
  portfolio,
  ui
})

export default rootReducer
