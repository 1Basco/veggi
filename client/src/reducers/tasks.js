/* eslint-disable import/no-anonymous-default-export */
import { FETCH_TASKS, ADD_TASK, DELETE_TASK, UPDATE_TASK } from '../constants/actionTypes';
export default (tasks = [], action) => {
    switch (action.type) {
        case FETCH_TASKS:
            return action.payload;
        case ADD_TASK:
            return [...tasks, action.payload];
        case UPDATE_TASK:
            return tasks.map((task) => task._id === action.payload._id ? action.payload : task);
        case DELETE_TASK:
            return tasks.filter((task) => task._id !== action.payload);
        default:
            return tasks;
    }
}