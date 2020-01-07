//import libraries 
import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import axios from 'axios'

//import components
import RecipeCard from './RecipeCard'

export default function RecipeList(){
    
    const [RecipeList, setRecipeList] = useState([])
    
    useEffect(() => {
        axios
        .get('https://chefprtfolio.herokuapp.com/api/dish/')
        .then(res => {
            console.log('recipe list', res)
            setRecipeList(res.data)
        })
        .catch(err => {
            console.log('recipe list err', err)
        })
    }, [])
    
    return(
        <div>
            <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            >
                {RecipeList.map(recipe => {
                    return <RecipeCard recipe={recipe}/>
                })}
            </Grid>
        </div>
    );
};