//import libraries 
import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import axios from 'axios'
import {getRecipes} from '../../actions/RecipeActions/FetchRecipe'
import { connect } from 'react-redux';
//import components
import RecipeCard from './RecipeCard'

const RecipeList= props => {    
    useEffect(() => {
        props.dispatch(getRecipes());
      }, []);
      console.log(props);
    
    return(
        <div>
            <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            >
                {props.recipes.map(recipe => {
                    return <RecipeCard recipe={recipe} key={recipe.id}/>
                })}
            </Grid>
        </div>
    );
};

// const mapStateToProps = state => {
//     return state;
// };

export default connect(state=>{
    return state
})(RecipeList);
