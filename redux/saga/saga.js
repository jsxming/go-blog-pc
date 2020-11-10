import global from './global';
import {all,fork} from 'redux-saga/effects';

export default function* root() {
    yield all([
        fork(global),
    ]);
}
