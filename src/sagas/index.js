import { fork } from 'redux-saga/effects';
import watchUserLoggin from './login/loginWatcher';
import watchUserAuthentication from './register/watcher';
import watchProjectsSagas from './projects/projectWatcher';
import watchUsersSaga from './users/usersWatcher';
import watchTaskSaga from './task/taskWatcher';


export default function* rootSaga() {
    yield fork(watchUserAuthentication);
    yield fork(watchUserLoggin);
    yield fork(watchProjectsSagas);
    yield fork(watchUsersSaga);
    yield fork(watchTaskSaga);
}