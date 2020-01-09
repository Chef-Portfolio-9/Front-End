import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
//import components
import {deleteRecipe} from '../../actions/RecipeActions/DeleteRecipe'

const RecipeCard=(props)=> {
    const recipe_id= props.recipe.id
    // useEffect(() => {
    //     props.dispatch(deleteRecipe(recipe_id));
    //   }, []);
    //   console.log(props);
    const editRecipe = event => {
        event.preventDefault();
        props.history.push('')
      };
    return (
        <div>

            <Card>
              <h4>{props.recipe.recipe_name}</h4>
              <button onClick={}>Edit Recipe</button>
              <button onClick={props.dispatch(deleteRecipe(recipe_id))}>Remove Recipe</button>
            </Card>

        </div>
    );
};

export default connect(state=>{
    return state
})(RecipeCard);
