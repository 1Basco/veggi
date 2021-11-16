import React, {  useState, useEffect } from 'react';
import useStyles from './styles';
import { Card, CardActions, CardContent, Button, Typography, Checkbox, FormControlLabel } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../../../actions/tasks';
import { getUserTasks } from '../../../actions/users';

const TaskUser = ({ task, setCurrentId, currentUserId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <div className={classes.overlay2}>
        <Button 
        style={{color: 'black'}} 
        size='small' 
        onClick={() => setCurrentId(task._id)}>
          <MoreHorizIcon fontSize='default'/>
        </Button>
      </div>
      <CardContent className={classes.cardContent}>
        <div>
          <Typography variant='h5' >Title: {task.title}</Typography>
          <Typography variant='body2'  >Description: {task.description}</Typography>
        </div>
        <Typography variant='body2' color='textSecondary'>Task by: {task.user}</Typography>
        <Typography variant='body2' color='textSecondary'>Task created at:{moment(task.createdAt).fromNow()}</Typography>
        <Typography variant='body2' color='textSecondary'>Task state: {task.state ? 'Done' : 'Not done'}</Typography>
      </CardContent>
      <CardActions>
        <Button size='small' onClick={() => dispatch(deleteTask(task._id))}>
          <DeleteIcon fontSize='default'/>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default TaskUser;