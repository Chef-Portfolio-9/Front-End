/* jshint esversion: 6 */

import React from 'react';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },

}));


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
        <MenuItem onClick={handleClose}>Marketplace</MenuItem>
        <MenuItem onClick={handleClose}>Dashboard</MenuItem>
        <br/>
        <MenuItem onClick={handleClose}>Front-End Code</MenuItem>
        <MenuItem onClick={handleClose}>Back-End Code</MenuItem>
        <MenuItem onClick={handleClose}>Home</MenuItem>
      </Menu>
    </div>
  );
};


export default OpenMenu;
