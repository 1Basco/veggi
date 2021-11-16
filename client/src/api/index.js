import axios from 'axios';

const tasksUrl = 'http://localhost:5000/tasks';
const usersUrl = 'http://localhost:5000/users/';


export const fetchTasks = () => axios.get(tasksUrl);

export const createTask = (newTask) => {
  return axios.post(tasksUrl, newTask);
}

export const updateTask = (id, updatedTask) => axios.patch(`${tasksUrl}/${id}`, updatedTask);

export const deleteTask = (id) => axios.delete(`${tasksUrl}/${id}`);


//fetch all users
export const fetchUsers = () => {
  return axios.get(usersUrl);
}

//get user by id
export const getUser = (id) => {
  return axios.get(`${usersUrl}${id}`);
}

//delete user by id
export const deleteUser = (id) => {
  return axios.delete(`${usersUrl}${id}`);
}

//get user tasks by id
export const getUserTasks = (id) => {
  return axios.get(`${usersUrl}${id}/tasks`);
}