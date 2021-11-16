import React from 'react';
import useStyles from './styles';
import { Card, CardActions, CardContent, Button, Typography, Checkbox, FormControlLabel } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteUser, getUsers, getUserTasks } from '../../../actions/users';

//create user card that when button is clicked show all user tasks in the Tasks component
const User = ({ user, setCurrentUserId, currentUserId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    return (
        <Card className={classes.root}>
        <CardContent>
            <Typography variant="h6" component="h2">
            {user.username}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" color="primary" 
            onClick={
                // when button is clicked set current user id to the user id and dispatch delete user action
                () => {
                    setCurrentUserId(user._id);
                    dispatch(deleteUser(user._id))
                    .then(() => dispatch(getUsers()))
                }
            }>
            <DeleteIcon /> DELETE USER
            </Button>
        </CardActions>
        <CardActions>
            <Button  size="small" color="primary" onClick={
                () => {
                    setCurrentUserId(user._id);
                    dispatch(getUserTasks(user._id));
                }
            }>
            <VisibilityIcon  /> USER TASKS
            </Button>
        </CardActions>
        </Card>
    );
}

export default User;