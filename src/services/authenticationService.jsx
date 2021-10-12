import axios from 'axios';

export const registerUserService = async(user) => {
    const REGISTER_API_ENDPOINT = 'http://localhost:5000/api/v2/users/signup';
    const {data} = await axios.post(REGISTER_API_ENDPOINT, user);
    return data;
};

export const loginUserService = async (user) => {
    const LOGIN_API_ENDPOINT = 'http://localhost:5000/api/v2/users/login';
    const { data:{email,id,username,token} } = await axios.post(LOGIN_API_ENDPOINT, user);

    localStorage.setItem('token', token);
    return {id, email, username, token};
};