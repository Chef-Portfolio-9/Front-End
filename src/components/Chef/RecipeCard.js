import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import components
import {deleteRecipe} from '../../actions/RecipeActions/DeleteRecipe'


const RecipeCard=(props)=> {
    const recipe_id= props.recipe.id
    // useEffect(() => {
    //     props.dispatch(deleteRecipe(recipe_id));
    //   }, []);
    //   console.log(props);
    // const editRecipe = event => {
    //     event.preventDefault();
    //     props.history.push('')
    //   };
    // const deleteRecipe= e=>{
    //     props.deleteRecipe(recipe_id)
    // }
    // console.log(recipe_id, 'recipecard id')

    const submitDelete = event => {
        event.preventDefault();
        props.deleteRecipe(recipe_id);
      };

    return (
        <div>
            <Card>
              <h4>{props.recipe.recipe_name}</h4>

              <button>Edit Recipe</button>
              <button onClick={submitDelete}>Remove Recipe</button>

            </Card>
        </div>
    );
};

const mapStateToProps = state => {
    return state;
};
export default connect(mapStateToProps, { deleteRecipe })(RecipeCard);

