/* jshint esversion: 6 */

import React from 'react';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },

}));

function signOut(){
    localStorage.clear();
    window.location.href='/';
}
function gitHub(){
    window.location.href='https://github.com/Chef-Portfolio-9/';
}

function marketing(){
    window.location.href='https://dreamy-lamarr-c50cc3.netlify.com/index.html#';
}


function dashboard(){
    window.location.href='/chefdashboard';
}

function guestPage(){
    window.location.href='/guest';
}


const OpenMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
      <MenuIcon />
    </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>guestPage()}>Guest Page</MenuItem>
        <MenuItem onClick={()=>dashboard()}>Dashboard</MenuItem>
        <MenuItem  onClick={()=>signOut()}>Sign Out</MenuItem>

        <Divider />
          <MenuItem onClick={()=>gitHub()}>Git-Hub</MenuItem>
              <MenuItem onClick={()=>marketing()}>Marketing Page</MenuItem>
      </Menu>
    </div>
  );
};


export default OpenMenu;
