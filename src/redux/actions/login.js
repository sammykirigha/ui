import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from '../types/types';

export const userLogging = (user) => {
    return ({
        type: LOGIN,
        user
    });
};

export const userLoginSuccess = (user) => {
    return ({
        type: LOGIN_SUCCESS,
        user
    });
};

export const userLoginFail = (error) => {
    return ({
        type: LOGIN_FAIL,
        error
    });
};

export const userLogout = () => {
    return {
        type: LOGOUT
    };
};

export const logout = () => async (dispatch) => {
    try {
        localStorage.removeItem('token');
        dispatch(userLogout());   
    } catch (error) {
        console.log(error);
    }
};