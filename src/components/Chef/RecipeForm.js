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
  paper:{

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
    // const recipe = {
    //   recipe_name: newRecipe.recipe_name,
    //   meal_type: newRecipe.meal_type,
    //   chef_id: userID
    // };
    console.log(newRecipe)
  };

  return (


    <form onSubmit={submitRecipe} className={classes.root} noValidate autoComplete="off">
    <NavBar/>
      <h2>Add Recipe</h2>
    <Paper className={classes.paper}>
    <div>
    <FormControl className={classes.formControl}>
    <InputLabel htmlFor="age-native-simple">Meal Type</InputLabel>
     {/* <Select
      native

      inputProps={{
        name: 'Meal Type',
        id: 'meal-type',
      }}
    >
      <option value="" />
      <option>Breakfast</option>
      <option>Lunch</option>
      <option>Dinner</option>
      <option>Snack</option>
      <option>Dessert</option>
    </Select> */}
  </FormControl> 


    </div>
    <br/>
    <div>

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


    </div>
      {/* <div>
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
      <br/> */}

<div>
      {/* <Button  variant="contained" component="label">
        Upload Recipe Image
        <input
          type="file"
          style={{ display: "none"}}
        />
      </Button> */}
      </div>
      <br/>

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
