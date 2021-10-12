import {
    CREATE_PROJECT_FAIL,
    CREATE_PROJECT_LOADING,
    CREATE_PROJECT_SUCCESS,
    DELETE_PROJECT_FAIL,
    DELETE_PROJECT_LOAD,
    DELETE_PROJECT_SUCCESS,
    GET_ONE_ROJECT_FAIL,
    GET_ONE_ROJECT_LOADING,
    GET_ONE_ROJECT_SUCCESS,
    GET_PROJECTS_FAIL,
    GET_PROJECTS_LOADING,
    GET_PROJECTS_SUCCESS,
    RESET_SELeCTED_PROJECT,
    UPDATE_PROJECT_FAIL,
    UPDATE_PROJECT_LOAD,
    UPDATE_PROJECT_SUCCESS
} from '../types/types';


export const createProjectLoad = (project) => {
    return ({
        type: CREATE_PROJECT_LOADING,
        project
    });
};

export const createProjectSuccess = (message) => {
    return({
        type: CREATE_PROJECT_SUCCESS,
        message
    });
};

export const createProjectFail = (error) => {
    return ({
        type: CREATE_PROJECT_FAIL,
        error
    });
};

//GET ALL PROJECTS FROM DATABASE
export const getProjects = () => {
    return ({
        type: GET_PROJECTS_LOADING,
    });
};

export const getProjectsSuccess = (projects) => {
    return({
        type: GET_PROJECTS_SUCCESS,
        projects
    });
};

export const getProjectsFail = (error) => {
    return ({
        type: GET_PROJECTS_FAIL,
        error
    });
};

//UPDATE THE PROJECT
export const updateProjectLoad = (id, updateBody) => {
    return ({
        type: UPDATE_PROJECT_LOAD,
        id,
        body: updateBody
    });
};

export const updateProjectSuccess = (message) => {
    return({
        type: UPDATE_PROJECT_SUCCESS,
        message
    });
};

export const updateProjectFail = (error) => {
    return ({
        type: UPDATE_PROJECT_FAIL,
        error
    });
};

//DELETE PROJECTS
export const deleteProjectLoad = (id) => {
    return ({
        type: DELETE_PROJECT_LOAD,
        id,
    });
};

export const deleteProjectSuccess = (projects) => {
    return({
        type: DELETE_PROJECT_SUCCESS,
        projects
    });
};

export const deleteProjectFail = (error) => {
    return ({
        type: DELETE_PROJECT_FAIL,
        error
    });
};

//GET PROJECT BY ID
export const getSingleProjectLoad = (id) => {
    return ({
        type: GET_ONE_ROJECT_LOADING,
        id,
    });
};

export const getSingleProjectSuccess = (project) => {
    return({
        type: GET_ONE_ROJECT_SUCCESS,
        project
    });
};

export const resetSelectedProject = () => {
    return({
        type: RESET_SELeCTED_PROJECT
    });
};

export const getSingleProjectFail = (error) => {
    return ({
        type: GET_ONE_ROJECT_FAIL,
        error
    });
};