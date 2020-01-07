//import libraries 
import React, { useEffect } from 'react'
import Grid from '@material-ui/core'
import axios from 'axios'
//import components
import RecipeCard from './RecipieCard'
export default function RecipeList(){
    
    const [RecipeList, setRecipeList]= useState()
    useEffect(()=>{
        axios
        .get('https://chefprtfolio.herokuapp.com/api/recipes/')
        .then(res=>{
            console.log('recipe list', res)
            setRecipeList()
        })
        .catch(err=>{
            console.log('recipe list err', err)
        })
    })
    return(
        <div>
            <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            >
                {RecipeList.map(recipe=>{
                    return <RecipeCard props={}/>
                })}
            </Grid>
        </div>
    );
};