import {combineReducers, createStore} from 'redux'
import updateGlobalData from './reducers/globalReducer'
import updateAppData from "./reducers/appDataReducer";
import updateFilterData from "./reducers/FilterDatasReducers";

export default createStore(combineReducers({
    updateGlobalData ,
    updateAppData,
    updateFilterData }
));