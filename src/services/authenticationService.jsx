import axios from "axios";

export const registerUserService = async (user) => {
  const REGISTER_API_ENDPOINT = "http://localhost:5001/api/v2/auth/signup";
  const { data } = await axios.post(REGISTER_API_ENDPOINT, user);
  return data;
};

export const loginUserService = async (user) => {
  const LOGIN_API_ENDPOINT = "http://localhost:5001/api/v2/auth/login";
  const {
    data: { email, id, username, token },
  } = await axios.post(LOGIN_API_ENDPOINT, user);

  localStorage.setItem("token", token);
  return { id, email, username, token };
};

export const getUsersService = async () => {
  const USERS_END_POINT = "http://localhost:5001/api/v2/users/";
  const { data } = await axios.get(USERS_END_POINT);
  return data;
};

export const getUserService = async (userId) => {
  const USER_END_POINT = `http://localhost:5001/api/v2/users/${userId}`;
  const { data } = await axios.get(USER_END_POINT);
  return data;
};
