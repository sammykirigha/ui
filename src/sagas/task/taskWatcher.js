import { takeLatest } from "@redux-saga/core/effects";
import { CREATE_TASK_LOADNIG, GET_TASKS_LOAD } from "../../redux/types/types";
import { createTaskSaga, getTaskSaga } from "./taskSaga";


export default function* watchTaskSaga() {
    yield takeLatest(CREATE_TASK_LOADNIG, createTaskSaga)
    yield takeLatest(GET_TASKS_LOAD, getTaskSaga)
}