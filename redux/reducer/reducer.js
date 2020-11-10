// import { actionTypes } from '../actions'
// import { HYDRATE } from 'next-redux-wrapper'
import {combineReducers} from 'redux';
import global from './global';


export default combineReducers({
    ...global
})


