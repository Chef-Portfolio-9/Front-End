//import libraries 
import React, { useEffect } from 'react'
import Grid from '@material-ui/core'
import axios from 'axios'
//import components
import RecipieCard from './RecipieCard'
export default function RecipieList(){
    const [RecipieList, setRecipieList]= useState()
    useEffect(()=>{
        axios
        .get('https://chefprtfolio.herokuapp.com/api/recipes/')
        .then(res=>{
            console.log('recipie list', res)
            setRecipieList()
        })
        .catch(err=>{
            console.log('recipie list err', err)
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
                {RecipieList.map(recipie=>{
                    return <RecipieCard props={}/>
                })}
            </Grid>
        </div>
    )
}