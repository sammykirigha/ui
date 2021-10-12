import { takeLatest } from 'redux-saga/effects';
import { REGISTER_USER } from '../../redux/types/types';
import { registerSaga } from './authenticationSaga';


export default function* watchUserAuthentication() {
    yield takeLatest(REGISTER_USER, registerSaga);
}