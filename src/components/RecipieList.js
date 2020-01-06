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
        .get()
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
            <Grid>
                {RecipieList.map(recipie=>{
                    return <RecipieCard props={}/>
                })}
            </Grid>
        </div>
    )
}