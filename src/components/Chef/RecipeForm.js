/* jshint esversion: 6 */

import React, { useState } from "react";
import { Button, TextField, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { createRecipe } from '../../actions/RecipeActions/CreateRecipe';
import NavBar from '../../components/NavBar.js';



const useStyles = makeStyles(theme => ({
  root: {
      margin: theme.spacing(1),
      width: 250,
      display: 'flex',
      flexDirection: 'column'
  },
  Btn: {
    backgroundColor: '#c62828',
        '&:hover': {
            backgroundColor: '#e53935'
        },
    marginTop: 10
  },
  formCont: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1%'
  },
  title: {
    marginTop: '10%',
    fontSize: '1.5rem',
    textDecoration: 'underline'
  }
}));

const RecipeForm = (props) => {
  const classes = useStyles();
  const userID = localStorage.getItem('userID');

  const [newRecipe, setNewRecipe] = useState({
    recipe_name: '',
    chef_id: userID,
    meal_type: ''
  });

  const handleChanges = event => {
    setNewRecipe({ ...newRecipe, [event.target.name]: event.target.value });
  };

  const submitRecipe = event => {
    event.preventDefault();
    props.createRecipe(newRecipe);
    props.history.push('/chefDashboard')
    console.log(newRecipe)
  };

  return (
  <div>
    <NavBar/>
    <Typography className={classes.title}>Add new recipe</Typography>
  <Container className={classes.formCont}>
    <form onSubmit={submitRecipe} className={classes.root} noValidate autoComplete="off">
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="recipename"
      label="Recipe Name"
      name="recipe_name"
      autoFocus
      value={newRecipe.recipe_name}
      onChange={handleChanges}
    />
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="mealtype"
      label="Meal Type"
      name="meal_type"
      autoFocus
      value={newRecipe.meal_type}
      onChange={handleChanges}
    />
      <Button className={classes.Btn} type="submit" variant="contained" color="secondary" margin="normal">
        Submit
      </Button>
    </form>
  </Container>
  </div>
  );
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps, { createRecipe })(RecipeForm);
