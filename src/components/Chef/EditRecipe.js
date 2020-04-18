import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Button,
  TextField,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import NavBar from "../../components/NavBar.js";
import { updateRecipe } from "../../actions/RecipeActions/UpdateRecipe";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 250,
    },
  },
  paper: {},
}));

const EditRecipe = (props) => {
  const classes = useStyles();
  const userID = localStorage.getItem("userID");
  let location = useLocation();

  let id = location.pathname.substr(12, location.pathname.length - 1);

  const [recipe, updatedRecipe] = useState({
    recipe_name: "",
    chef_id: userID,
    meal_type: "",
  });

  const handleChanges = (event) => {
    event.preventDefault();
    updatedRecipe({ ...recipe, [event.target.name]: event.target.value });
  };

  const submitUpdatedRecipe = (event) => {
    const updatedRecipe = {
      recipe_name: recipe.recipe_name,
      chef_id: userID,
      meal_type: recipe.meal_type,
    };
    event.preventDefault();
    props.updateRecipe(id, updatedRecipe);
    props.history.push("/chefDashboard");
  };

  return (
    <div>
      <form
        onSubmit={submitUpdatedRecipe}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <NavBar />
        <h2>Edit Recipe</h2>
        <Paper className={classes.paper}>
          <div>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">Meal Type</InputLabel>
            </FormControl>
          </div>
          <br />
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
          <div></div>
          <br />
        </Paper>
        <div>
          {" "}
          <br />{" "}
        </div>

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          margin="normal"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { updateRecipe })(EditRecipe);
