import React, { useState, useEffect } from "react";
import {Select, FormControl,InputLabel, Button,TextField,Container ,Switch,FormControlLabel ,Typography,TextareaAutosize, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import NavBar from '../../components/NavBar.js';
import { updateRecipe } from '../../actions/RecipeActions/UpdateRecipe';

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

    const EditRecipe = (props) => {

    const classes = useStyles();
    const userID = localStorage.getItem('userID');

    const [recipe, updatedRecipe] = useState({
        recipe_name: '',
        chef_id: userID,
        meal_type: ''
    });

    useEffect(() => {
        props.updateRecipe(userID);
      }, []);
      console.log(props);

    const handleChanges = event => {
        event.preventDefault();
        updatedRecipe({ ...recipe, [event.target.name]: event.target.value });
      };
    
      const submitUpdatedRecipe = event => {
        const updatedRecipe = {
          recipe_name: recipe.recipe_name,
          chef_id: recipe.userID,
          meal_type: recipe.meal_type
        };
        event.preventDefault();
        props.updateRecipe(updatedRecipe, userID);
        props.history.push('/chefDashboard')
      };

    
    return (
        <div>
            <form onSubmit={submitUpdatedRecipe} className={classes.root} noValidate autoComplete="off">
    <NavBar/>
      <h2>Add Recipe</h2>
    <Paper className={classes.paper}>
    <div>
    <FormControl className={classes.formControl}>
    <InputLabel htmlFor="age-native-simple">Meal Type</InputLabel>    
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
      value={recipe.recipe_name}
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
      value={recipe.meal_type}
      onChange={handleChanges}
    />
    </div>
<div>
      </div>
      <br/>

    </Paper>
      <div> <br/> </div>






      <Button type="submit" variant="contained" color="secondary" margin="normal">
        Submit
      </Button>
    </form>
        </div>
    )
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, {updateRecipe})(EditRecipe);