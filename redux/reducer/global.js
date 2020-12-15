//token
import Cookies from 'js-cookie';
import { actionTypes } from '../actions';

export function token(state = '', action) {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.SET_TOKEN:
            return payload;
        case actionTypes.DELETE_TOKEN:
            Cookies.remove('token')
            return '';
        default:
            return state;
    }
}


export function user(state = {}, action) {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.SET_USER:
            return { ...state, ...payload };
        default:
            return state;
    }
}


export function types(state=[],action){
    const { type, payload } = action;
    switch (type) {
        case actionTypes.SET_TYPES:
            return { ...state, ...payload };
        default:
            return state;
    }
}




export default {
    token,
    user,
    types
}