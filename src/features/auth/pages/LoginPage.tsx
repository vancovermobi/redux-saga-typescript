import { Box, Button, CircularProgress, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { styled } from '@material-ui/core/styles';
import * as React from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { authActions } from '../authSlice';

const useStyles = makeStyles((theme) => ({   
  root: {
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
  },
  box: {
    //   padding: theme.spacing(3),
  }
}));

const BoxTheme = styled('div')(({
    theme
  }) => ({
    padding: theme.spacing(3),
  }));

export default function LoginPage() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const isLogging = useAppSelector(state => state.auth.logging);

  const handleLoginClick = () => {
    //   TODO: Get username + password from login from
    dispatch(authActions.login({
        username: 'liem',
        password: '123',
    }));
  }
  return (
    <div className={ classes.root }>
      <Paper className={ classes.box } elevation={1} >
          <BoxTheme>
        <Typography
            variant="h5" 
            component="h1"
        >Student Management
        </Typography>

        <Box mt={4}>
            <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={ handleLoginClick }                
            >{ isLogging && <CircularProgress size={20} color='secondary' />}
              <span>&nbsp;&nbsp;</span> Fake Login 
            </Button>
        </Box>   
        </BoxTheme>
      </Paper>
    </div>
  );
}
