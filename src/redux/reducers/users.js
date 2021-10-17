import {
    LOAD_ONE_USER,
    LOAD_ONE_USER_FAILED,
    LOAD_ONE_USER_SUCCESS,
    LOAD_USERS,
    LOAD_USERS_FAILED,
    LOAD_USERS_SUCCESS
} from "../types/types";

export const getAllUsersReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case LOAD_USERS:
            return {
                ...state,
                loading: true
            };
        case LOAD_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: [...action.users]
            };
        case LOAD_USERS_FAILED:
            return { 
                ...state,
                loading: false,
                error: action.error
             };
        default:
            return state;
    }
};

export const getOneUserReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case LOAD_ONE_USER:
            return {
                ...state,
                loading: true
            };
        case LOAD_ONE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.user
            };
        case LOAD_ONE_USER_FAILED:
            return { 
                ...state,
                loading: false,
                user: {},
                error: action.error
             };
        default:
            return state;
    }
};