import { takeLatest } from "redux-saga/effects";
import { LOAD_ONE_USER, LOAD_USERS } from "../../redux/types/types";
import { getOneUserSaga, getUsersSaga } from "./usersSaga";

export default function*watchUsersSaga() {
    yield takeLatest(LOAD_USERS, getUsersSaga)
    yield takeLatest(LOAD_ONE_USER, getOneUserSaga)
}