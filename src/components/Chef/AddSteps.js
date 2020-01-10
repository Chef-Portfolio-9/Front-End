/* jshint esversion: 6 */

import React, { useState } from "react";
import {Select, FormControl,InputLabel, Button,TextField,Container ,Switch,FormControlLabel ,Typography,TextareaAutosize, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { createRecipe } from '../../actions/RecipeActions/CreateRecipe';
import NavBar from '../../components/NavBar.js';



const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 250,
    },
  },
}));

const AddSteps = ( ) => {
  
  const classes = useStyles();
  
  return (
  <React.Fragment>
    <NavBar/>
      <h2>Add Steps</h2>
    <Paper className={classes.paper}>
    <br/>
       <div>
        <TextField
          id="outlined-multiline-static"
          label="Steps"
          multiline
          rows="20"
          defaultValue="Add Steps"
          variant="outlined"
        />
      </div>
      <br/>
    </Paper>
    <Button type="submit" variant="contained" color="secondary" margin="normal">
      Submit
    </Button>
  </React.Fragment>
  );
};


export default AddSteps;
