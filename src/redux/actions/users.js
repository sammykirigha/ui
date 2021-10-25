import { LOAD_ONE_USER, LOAD_ONE_USER_FAILED, LOAD_ONE_USER_SUCCESS, LOAD_USERS, LOAD_USERS_FAILED, LOAD_USERS_SUCCESS } from "../types/types";

export const loadAllUsers = () => {
    return ({
        type: LOAD_USERS
    });
};

export const getAllUsersSuccess = (users) => {
    return({
        type: LOAD_USERS_SUCCESS,
        users
    });
};

export const getAllUsersFailed = (error) => {
    return ({
        type: LOAD_USERS_FAILED,
        error
    });
};

//GET ONE USER

export const loadOneUser = (userId) => {
    return ({
        type: LOAD_ONE_USER,
        userId
    });
};

export const getOneUserSuccess = (user) => {
    return({
        type: LOAD_ONE_USER_SUCCESS,
        user
    });
};

export const getOneUserFailed = (error) => {
    return ({
        type: LOAD_ONE_USER_FAILED,
        error
    });
};