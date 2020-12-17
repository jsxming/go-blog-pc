import {combineReducers} from 'redux';
import { HYDRATE } from 'next-redux-wrapper'

import global from './global';


let allReducer = combineReducers({
    ...global
})


const rootReducer = (state, action) => {
    if (action.type === HYDRATE) {
      return {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      }
    } else {
      return allReducer(state, action)
    }
}

export default rootReducer


