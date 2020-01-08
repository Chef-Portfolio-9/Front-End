/* jshint esversion: 6 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
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
}));

function signOut(){
    localStorage.clear();
    window.location.href='/';
}


const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <OpenMenu />
          <Typography variant="h6" className={classes.title}>
            Chef Portfolio
          </Typography>
          <Button onClick={()=>signOut()} color="inherit">Sign Out</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
