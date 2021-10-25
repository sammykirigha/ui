import {
    CREATE_TASK_FAIL,
    CREATE_TASK_LOADNIG,
    CREATE_TASK_SUCCESS,
    GET_TASKS_FAIL,
    GET_TASKS_LOAD,
    GET_TASKS_SUCCESS
} from "../types/types";


export const createTaskReducer = (state = { task: {} }, action) => {
    switch (action.type) {
        case CREATE_TASK_LOADNIG:
            return {
                ...state,
                loading: true,
            }
        case CREATE_TASK_SUCCESS:
            return {
                ...state,
                loading: false,
                createMessage: action.message
            }
        case CREATE_TASK_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export const getTaskReducer = (state = { tasks: [] }, action) => {
    switch (action.type) {
        case GET_TASKS_LOAD:
            return {
                ...state,
                loading: true,
            }
        case GET_TASKS_SUCCESS:
            return {
                ...state,
                loading: false,
                tasks: [action.tasks]
            }
        case GET_TASKS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
                tasks: []
            }
        default:
            return state
    }
}