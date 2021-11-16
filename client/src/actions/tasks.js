import * as api from '../api';
import { FETCH_TASKS, ADD_TASK, DELETE_TASK, UPDATE_TASK } from '../constants/actionTypes';

//Action Creators

export const getTasks = () => async (dispatch) => {
    try {
      const { data } = await api.fetchTasks();
  
      dispatch({ type: FETCH_TASKS, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };


export const createTask = (task) => async (dispatch) => {
    try {
        const { data } = await api.createTask(task);
        dispatch({type: ADD_TASK, payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateTask = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updateTask(id, post);
        dispatch({type: UPDATE_TASK, payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteTask = (id) => async (dispatch) => {
    try {
        await api.deleteTask(id);
        dispatch({type: DELETE_TASK, payload: id});
    } catch (error) {
        console.log(error.message);
    }
}