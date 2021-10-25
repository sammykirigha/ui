import {
    CREATE_TASK_FAIL,
    CREATE_TASK_LOADNIG,
    CREATE_TASK_SUCCESS,
    GET_TASKS_FAIL,
    GET_TASKS_LOAD,
    GET_TASKS_SUCCESS
} from "../types/types";


export const createTask = (task_to_add) => ({
    type: CREATE_TASK_LOADNIG,
    task_to_add
})

export const createTaskSuccess = (messagge) => ({
    type: CREATE_TASK_SUCCESS,
    messagge
})

export const createTaskFail = (error) => ({
    type: CREATE_TASK_FAIL,
    error
})

//GET TASKS
export const getTasks = (pid) => ({
    type: GET_TASKS_LOAD,
    pid
})

export const getTasksSuccess = (tasks) => ({
    type: GET_TASKS_SUCCESS,
    tasks
})

export const getTasksFail = (error) => ({
    type: GET_TASKS_FAIL,
    error
})