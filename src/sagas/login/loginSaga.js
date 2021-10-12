import { put, call } from 'redux-saga/effects';
import { loginUserService } from '../../services/authenticationService';
import { userLoginFail, userLoginSuccess } from '../../redux/actions/login';


export function* loginSaga(action) {
    try {
        const user = yield call(loginUserService, action.user);
        console.log('login saga user<<<>>>',{user});
        yield put(userLoginSuccess(user));
    } catch (error) {
        yield put(userLoginFail('Login failed try again!!!...'));
    }
}