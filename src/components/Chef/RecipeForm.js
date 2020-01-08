/* jshint esversion: 6 */

import React, { useState } from "react";
import { Button,TextField, Container , Switch,FormControlLabel , Typography, TextareaAutosize, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { createRecipe } from '../../actions/RecipeActions/CreateRecipe';
 


const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 250,
    },
  },

}));

const RecipeForm = () => {
  const classes = useStyles();


  return (

    <form className={classes.root} noValidate autoComplete="off">

      <h2>Add Recipe</h2>
    <Paper className={classes.paper}>
    <div>

    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="recipeName"
      label="Recipe Name"
      name="RecipeName"
      autoFocus

    />
    </div>
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Ingredients"
          multiline
          rows="20"
          defaultValue="Add Ingredients"
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          label="Instructions"
          multiline
          rows="20"
          defaultValue="Add Steps"
          variant="outlined"
        />
      </div>
    </Paper>
      <div> <br/> </div>
      <Button type="submit" variant="contained" color="secondary" margin="normal">
        Submit
      </Button>
    </form>
  );
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps, { createRecipe })(RecipeForm);
