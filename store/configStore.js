import {combineReducers, createStore} from 'redux'
import updateGlobalData from './reducers/globalReducer'
import updateAppData from "./reducers/appDataReducer";

export default createStore(combineReducers({ updateGlobalData , updateAppData }))