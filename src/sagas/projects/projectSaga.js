import { call, put } from 'redux-saga/effects';
import {
    deleteProjectService,
    getAllProjectsService,
    getSingleProjectService,
    projectCreateService,
    updateProjectService
} from '../../services/projectService';
import {
    createProjectFail,
    createProjectSuccess,
    deleteProjectFail,
    deleteProjectSuccess,
    getProjectsFail,
    getProjectsSuccess,
    updateProjectFail,
    updateProjectSuccess,
    getSingleProjectSuccess,
    getSingleProjectFail, getProjects
} from '../../redux/actions/project';


export function*createProjectSaga(action) {
    try {
        const project = yield call(projectCreateService, action.project);
        yield put(createProjectSuccess(project));
    } catch (error) {
        yield put(createProjectFail('Failed to create project try again!!!...'));
    }
}

export function* getAllProjectsSaga(action) {
    try {
        const projects = yield call(getAllProjectsService, action.uid);
        yield put(getProjectsSuccess(projects));
    } catch (error) {
        yield put(getProjectsFail('Failed to load your projects'));
    }
}

export function* updateProjectSaga(action) {
    try {
        const newData = yield call(updateProjectService, action.id, action.body)
        yield put(updateProjectSuccess(newData))
        yield put(getProjects())
    } catch (error) {
        yield put(updateProjectFail('Failed to update'))
    }
}

export function* deleteProjectSaga(action) {
    try {
        const newData = yield call(deleteProjectService, action.id)
        yield put(deleteProjectSuccess(newData))
        yield put(getProjects())
       
    } catch (error) {
       
        yield put(deleteProjectFail('Failed to update'))
    }
}

export function* getSingleProjectSaga(action) {
    try {
        const oneProject = yield call(getSingleProjectService, action.id)
        console.log({oneProject});
        yield put(getSingleProjectSuccess(oneProject))
    } catch (error) {
        yield put(getSingleProjectFail('Fail to load project...'))
    }
}
