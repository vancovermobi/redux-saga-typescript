import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useAppDispatch } from 'app/hooks';
import { authActions } from 'features/auth/authSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  btnLogOut: {
      borderRadius: '8px',
  }
}));
export interface HeaderProps {}
export function Header(Props: HeaderProps) {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            Student Management
          </Typography>

          <Button color="inherit" className={ classes.btnLogOut }
                  onClick={() => dispatch(authActions.logout())}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
