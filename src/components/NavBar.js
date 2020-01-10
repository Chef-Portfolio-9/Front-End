/* jshint esversion: 6 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core/';
import OpenMenu from './Menu.js';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
     textAlign: "left"
  },
  nav: {
    backgroundColor: '#c62828',
  },
  signOutBtn: {
    backgroundColor: '#c62828',
        '&:hover': {
            backgroundColor: '#e53935'
        },
  }
}));

function signOut(){
    localStorage.clear();
    window.location.href='/';
}


const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.nav} position="sticky">
        <Toolbar>
          <OpenMenu />
          <Typography variant="h6" className={classes.title}>
            Chef Portfolio
          </Typography>
          <Button className={classes.signOutBtn} onClick={()=>signOut()} color="inherit">Sign Out</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
