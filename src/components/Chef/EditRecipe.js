import React, { useState } from "react";
import { connect } from 'react-redux';
import { updateRecipe } from '../../actions/RecipeActions/UpdateRecipe';
import NavBar from '../../components/NavBar.js';

const EditRecipe = (props) => {
    const userID = localStorage.getItem('userID');
    const recipe_id= props.recipe.id

    const [update, setUpdate] = useState({
      recipe_name: '',
      chef_id: userID,
      meal_type: ''
    });
    
    const saveEdit= e=>{
        e.preventDefault()
        props.dispatch(updateRecipe(recipe_id))
    }

    const handleChanges = event => {
      setUpdate({ ...update, [event.target.name]: event.target.value });
    };
  
    return (
  
  
      <form onSubmit={saveEdit} className={classes.root} noValidate autoComplete="off">
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
        value={update.recipe_name}
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
        value={update.meal_type}
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
  
  export default connect(mapStateToProps, { updateRecipe })(EditRecipe);