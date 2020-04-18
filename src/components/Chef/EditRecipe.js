import React, { useState, useEffect } from "react";
import { Button, TextField, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import NavBar from "../../components/NavBar.js";
import { updateRecipe } from "../../actions/RecipeActions/UpdateRecipe";
import { fetchSpecificRecipe } from "../../actions/RecipeActions/FetchSpecificRecipe";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 250,
    },
  },
  recipeInput: {
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#c62828",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#c62828",
    },
  },
  editContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  submitEdit: {
    backgroundColor: "#c62828",
    "&:hover": {
      backgroundColor: "#e53935",
    },
    marginTop: "1.5rem",
    marginBottom: "2rem",
  },
  recipeTitle: {
    fontFamily: "Inria Serif",
  },
}));

const EditRecipe = (props) => {
  const classes = useStyles();
  const userID = localStorage.getItem("userID");
  let location = useLocation();

  let id = location.pathname.substr(12, location.pathname.length - 1);

  // State
  // New Recipe data to send to update Recipe
  const [recipe, updatedRecipe] = useState({
    recipe_name: "",
    chef_id: userID,
    meal_type: "",
  });

  useEffect(() => {
    props.fetchSpecificRecipe(id);
  }, []);

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
        <h2 className={classes.recipeTitle}>{props.recipes.recipe_name}</h2>
        <Paper className={classes.paper}>
          <div className={classes.editContainer}>
            <TextField
              className={classes.recipeInput}
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
              className={classes.recipeInput}
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
          <Button
            className={classes.submitEdit}
            type="submit"
            variant="contained"
            margin="normal"
          >
            Submit
          </Button>
        </Paper>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { updateRecipe, fetchSpecificRecipe })(
  EditRecipe
);
