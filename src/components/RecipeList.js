

//import libraries
import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import {getRecipes} from '../../actions/RecipeActions/FetchRecipe'
import { connect } from 'react-redux';
import axios from 'axios';
//import components



const RecipeList= props => {
    useEffect(()=>{
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

export default connect(state=>{
    return state
})(RecipeList);

