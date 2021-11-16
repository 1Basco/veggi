import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, FormControlLabel, Checkbox } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from './styles';
import { createTask, getTasks, updateTask } from '../../actions/tasks';
import { getUsers } from '../../actions/users';

const Form = ({ currentId, setCurrentId }) => {
    const [taskData, setTaskData] = useState({
         title: '', description:'', state: false,  username:''
    });
    // O que está comentado representa outra maneira que eu estava pensando em fazer
    /*const [userData, setUserData] = useState({
        username:'',
    });*/

    const dispatch = useDispatch();
    const classes = useStyles();
    //const users = useSelector((state) => state.users);
    const singleTask = useSelector((state) => currentId ? state.tasks.find((task) => task._id === currentId) : null);

    //Fazer useEffect para pegar os dados da task

    useEffect(() => {
      if(singleTask) setTaskData(singleTask);
    } , [singleTask]);
      

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId){
          dispatch(updateTask(currentId, taskData));
          handleClear();
        }else{
          dispatch(createTask(taskData))
          .then(() => dispatch(getTasks()))
          .then(() => dispatch(getUsers()))
          handleClear();
        }
        
    }

    //Function for clear the form
    const handleClear = () => {
        setCurrentId(null);
        setTaskData({
            title: '', description:'', state: false,  username:''
        });
    }
  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit} container directon={'column'}>
      <Typography variant='h6'>{currentId ? 'Editing' : 'Creating'} a Task</Typography>
      <TextField
      className={classes.textField}
      name='creator' 
      variant='outlined' 
      label="Creator" 
      fullWidth
      value={taskData.username}
      onChange={
        (e) => ( setTaskData({...taskData, username: e.target.value}))}
      />
      <TextField className={classes.textField} name='title' variant='outlined' label="Title" fullWidth
      value={taskData.title}
      onChange={
        (e) => setTaskData({...taskData, title: e.target.value})}
      />
      <TextField className={classes.textField} name='description' variant='outlined' label="Description" fullWidth
      value={taskData.description}
      onChange={
        (e) => setTaskData({...taskData, description: e.target.value})}
      />
      {/* FormControlLabel for task.state */}
      <FormControlLabel
        control={
          <Checkbox
            checked={taskData.state}
            onChange={
              (e) => setTaskData({...taskData, state: e.target.checked})}
            name='state'
            color='primary'
          />
        }
        label={taskData.state ? 'Finished' : 'To Do'}
      /> 
      <Button className={classes.buttonSubmit} variant='contained' color='primary' type='submit'>{currentId ? 'Edit' : 'Create'}</Button>
      </form>
    </Paper>
  );
}

export default Form;