import * as api from '../api';

//Action Creators

export const getUsers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUsers();
        dispatch({type: 'FETCH_USERS', payload: data});
    } catch (error) {
        console.log(error.message);
        
    }
}

//getUser
export const getUser = (id) => async (dispatch) => {
    try {
        const { data } = await api.getUser(id);
        dispatch({type: 'FETCH_USER', payload: data});
    } catch (error) {
        console.log(error.message);
        
    }
}

//deleteUser
export const deleteUser = (id) => async (dispatch) => {
    try {
        const { data } = await api.deleteUser(id);
        dispatch({type: 'DELETE_USER', payload: data});
    } catch (error) {
        console.log(error.message);
        
    }
}

//get user tasks
export const getUserTasks = (id) => async (dispatch) => {
    try {
        const { data } = await api.getUserTasks(id);
        dispatch({type: 'FETCH_USER_TASKS', payload: data});
    } catch (error) {
        console.log(error.message);
        
    }
}