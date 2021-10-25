import axios from "axios";

export const CreateTaskService = async (task_to_add) => {
  const CREATE_TASK_API_ENDPOINT = "http://localhost:5000/api/v2/tasks/create";
  const { data } = await axios.post(CREATE_TASK_API_ENDPOINT, task_to_add);
  return data;
};

export const getAllTasksService = async (pid) => {
  const GET_ALL_TASKS_ENDPOINT = `http://localhost:5000/api/v2/tasks/${pid}`;
  const { data } = await axios.get(GET_ALL_TASKS_ENDPOINT);
  return data;
};
