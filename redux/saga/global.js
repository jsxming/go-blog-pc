import { all, takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import { actionTypes, setUser,setArticles } from '../actions';
import API from '@/api/index';


function* login(action) {
    const res = yield call(API.login, action.payload);
    yield put(setUser(res.token));
}


function* queryArticle(action){
    const res = yield call(API.queryArticles,action.payload);
    yield put(setArticles(res.list || []));
}



export default function* golbal() {
    yield all([
        takeEvery(actionTypes.DO_LOGIN, login),
        takeLatest(actionTypes.QUERY_ARTICLE,queryArticle)
    ]);
}


