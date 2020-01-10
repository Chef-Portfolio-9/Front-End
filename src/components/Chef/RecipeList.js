import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
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

export default connect(state=>{
    return state
})(RecipeList);

