import { useSelector } from 'react-redux';
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


export const createProjectReducer = (state = { project: {} }, action) => {
    switch (action.type) {
        case CREATE_PROJECT_LOADING:
            return {
                ...state,
                loading: true
            };
        case CREATE_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                createMessage: action.message
            };
        
        case CREATE_PROJECT_FAIL:
            return { 
                ...state,
                loading: false,
                error: action.error
             };
        default:
            return state;
    }

};

//get all projects reducer

export const fetchProjectsReducer = (state = { projects: []}, action) => {
    switch (action.type) {
        case GET_PROJECTS_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_PROJECTS_SUCCESS:
            return {
                ...state,
                loading: false,
                projects: [...action.projects]
            };
        case GET_PROJECTS_FAIL:
            return { 
                ...state,
                loading: false,
                error: action.error
             };
        default:
            return state;
    }
};

//update the project
const initialState = {
    projects: []
}
export const updateProjectReducer = (state = { message: '' }, action) => {
    switch (action.type) {
        case UPDATE_PROJECT_LOAD:
            return {
                ...state,
                loading: true,
            }
        case UPDATE_PROJECT_SUCCESS:
            return {
                ...state,
                updateMessage: action.message,
                loading: false
            }
        case UPDATE_PROJECT_FAIL: 
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

//delete project
export const deleteProjectReducer = (state = [], action) => {
    switch (action.type) {
        case DELETE_PROJECT_LOAD: 
            return {
                ...state,
                loading: true
            }
        case DELETE_PROJECT_SUCCESS: 
            return {
                ...state,
                projects: [ state.projects.filter(project => project.id !== action.id)]
            }
        case DELETE_PROJECT_FAIL:
            return {
                ...state,
                loading: false
            }
        default: 
            return state
    }
}

//GET ONE PROJECT
export const getSingleProjectReducer = (state = {project: {}}, action) => {
    switch (action.type) {
        case GET_ONE_ROJECT_LOADING: 
            return {
                ...state,
                loading: true
            }
        case GET_ONE_ROJECT_SUCCESS: 
            return {
                ...state,
                project: action.project,
                loading: false
            }
        case GET_ONE_ROJECT_FAIL:
            return {
                ...state,
                loading: false,
                project:{}
            }
        case RESET_SELeCTED_PROJECT:
            return {
                ...state,
                project:{}
            }
    
        default: 
            return state
    }
}
