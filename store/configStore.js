import {combineReducers, createStore} from 'redux'
import updateGlobalData from './reducers/globalReducer'

export default createStore(combineReducers({ updateGlobalData }))