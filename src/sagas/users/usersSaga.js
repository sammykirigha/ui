import { call, put } from "redux-saga/effects";
import {
    getAllUsersFailed,
    getAllUsersSuccess,
    getOneUserFailed,
    getOneUserSuccess
} from "../../redux/actions/users";
import { getUserService, getUsersService } from "../../services/authenticationService";

export function*getUsersSaga(action) {
    try {
        const users = yield call(getUsersService)
        yield put(getAllUsersSuccess(users));
    } catch (error) {
        yield put(getAllUsersFailed('Failed to load your users'));
    }
}

export function*getOneUserSaga(action) {
    try {
        const user = yield call(getUserService, action.userId);
        console.log({user});
        yield put(getOneUserSuccess(user));
    } catch (error) {
        yield put(getOneUserFailed('Failed to load the user'));
    }
}