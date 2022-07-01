import { combineReducers } from 'redux'

import projectReducer from './project'
import bugsReducer from './bugs'

import hotelReducer from './hotel'
import usersReducer from './users'


export default combineReducers({
  bugs : bugsReducer,
  projects:projectReducer,
  hotels:hotelReducer,
  users:usersReducer
})