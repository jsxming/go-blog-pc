import { all, takeEvery, call, put } from 'redux-saga/effects';
import { actionTypes, setUser } from '../actions';



function* login(action) {
    const res = yield call(API.login, action.payload);
    put(setUser(res.token));
}

export default function* golbal() {
    yield all([
        takeEvery(actionTypes.DO_LOGIN, login),
    ]);
}


