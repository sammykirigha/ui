import { call, put } from "@redux-saga/core/effects";
import { createTaskFail, createTaskSuccess, getTasksFail, getTasksSuccess } from "../../redux/actions/task";
import { CreateTaskService, getAllTasksService } from "../../services/taskService";


export function* createTaskSaga(action) {
    try {
        const project = yield call(CreateTaskService, action.task_to_add);
        yield put(createTaskSuccess(project));
    } catch (error) {
        yield put(createTaskFail('Failed to create task try again!!!...'));
    }
}

export function* getTaskSaga(action) {
    try {
        const tasks = yield call(getAllTasksService, action.pid);
        yield put(getTasksSuccess(tasks))
    } catch (error) {
        yield put(getTasksFail('could not retrieve all tasks'))
    }
}