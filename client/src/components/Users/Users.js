import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Grid, CircularProgress } from '@material-ui/core';
import useStyles from './styles';
import User from './User/User';
import { getUsers } from '../../actions/users';

const Users = ({ currentUserId, setCurrentUserId }) => {
    const classes = useStyles();

    //pass the users state to the component
    const users = useSelector(state => state.users);
    console.log(users);
    
    return (
        !users.length ? <CircularProgress className={classes.progress} /> :(
            <Grid className={classes.mainContainer} container alignItems='stretch'>
              {users.map((user) => (
                <Grid className={classes.grid} key={user._id} item xs={12} sm={12}>
                  <User user={user} setCurrentUserId={setCurrentUserId}/>
                </Grid>
              ))}
            </Grid>
         )
    );
}

export default Users;
