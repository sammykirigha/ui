import { fork } from 'redux-saga/effects';
import watchUserLoggin from './login/loginWatcher';
import watchUserAuthentication from './register/watcher';
import watchProjectsSagas from './projects/projectWatcher';


export default function* rootSaga() {
    yield fork(watchUserAuthentication);
    yield fork(watchUserLoggin);
    yield fork(watchProjectsSagas);
}