import { takeLatest } from 'redux-saga/effects';
import { CREATE_PROJECT_LOADING, DELETE_PROJECT_LOAD, GET_ONE_ROJECT_LOADING, GET_PROJECTS_LOADING, UPDATE_PROJECT_LOAD } from '../../redux/types/types';
import { getAllProjectsSaga, createProjectSaga, updateProjectSaga, deleteProjectSaga, getSingleProjectSaga } from './projectSaga'


export default function* watchProjectsSagas() {
    yield takeLatest(CREATE_PROJECT_LOADING, createProjectSaga);
    yield takeLatest(GET_PROJECTS_LOADING, getAllProjectsSaga);
    yield takeLatest(UPDATE_PROJECT_LOAD, updateProjectSaga);
    yield takeLatest(DELETE_PROJECT_LOAD, deleteProjectSaga)
    yield takeLatest(GET_ONE_ROJECT_LOADING, getSingleProjectSaga)
}