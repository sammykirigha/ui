import { takeLatest } from 'redux-saga/effects';
import { LOGIN } from '../../redux/types/types';
import { loginSaga } from './loginSaga';


export default function* watchUserLoggin() {
    yield takeLatest(LOGIN, loginSaga);
}