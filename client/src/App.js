import React, { useEffect, useState } from 'react';
import { Container, AppBar, Toolbar, Typography, Button, Grid, Grow } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { getTasks } from './actions/tasks';
import { getUsers } from './actions/users';
import Tasks from './components/Tasks/Tasks';
import Form from './components/Form/Form';
import useStyles from './styles';
import Users from './components/Users/Users';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    //state for user current id
    const [currentUserId, setCurrentUserId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTasks());
        dispatch(getUsers());
        
    }, [currentId, currentUserId, dispatch])

    

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position='static' >
                <Typography className={classes.heading} variant='h2' align='center'> Tarefas </Typography>

            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={8} sm={6}>
                            <Tasks setCurrentId={setCurrentId} currentUserId={currentUserId}/>
                        </Grid>
                        <Grid item xs={8} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                        {/* Grid for the users */}
                        <Grid item xs={8} sm={2}>
                            <Typography className={classes.heading} variant='h5' align='center'> Users </Typography>
                            <Users setCurrentUserId={setCurrentUserId} currentUserId={currentUserId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;