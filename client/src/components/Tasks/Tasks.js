import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Grid, CircularProgress, Typography } from '@material-ui/core';
import Task from './Task/Task';
import TaskUser from './TaskUser/TaskUser';
import useStyles from './styles';


const Tasks = ({ setCurrentId, currentUserId }) => {
    const tasks = useSelector((state) => state.tasks);
    const tasksUser = tasks.filter((task) => task.taskBy === currentUserId);
    const classes = useStyles();
    
  return (
     !tasks.length ? <CircularProgress className={classes.progress} /> :(
      <div>
        <Typography className={classes.title} variant='h5'> Task List </Typography>
        <Grid className={classes.mainContainer} container alignItems='stretch'>
          {tasks.map((task) => (
            <Grid key={task._id} item xs={12} sm={6}>
              <Task task={task} setCurrentId={setCurrentId} currentUserId={currentUserId}/>
            </Grid>
          ))}
        </Grid>
        
        <div>
          <Typography className={classes.title} variant='h5'> User Task List </Typography>
          <Grid className={classes.mainContainer} container alignItems='stretch'>
            {tasksUser.map((task) => (
              <Grid key={task._id} item xs={12} sm={6}>
                <TaskUser task={task} setCurrentId={setCurrentId} currentUserId={currentUserId}/>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
     )
  );
}

export default Tasks;