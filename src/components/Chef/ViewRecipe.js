/* jshint esversion: 6 */
import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import GuestRecipeList from './GuestRecipeList';
import NavBar from '../NavBar.js';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 700,
  },
});



const ViewRecipe = () => {
const classes = useStyles();


return(
<React.Fragment>
  <NavBar/>
<Container maxWidth= "md" className={classes.root}>
<br/>
<div>
<Typography variant="h2" gutterBottom>
     Recipe Name
   </Typography>

   <Typography variant="h5" gutterBottom>
     Meal Type
   </Typography>
   <br/>
   <Button  variant="outlined" color="primary">
   Edit Recipe
   </Button>

   </div>
<br/>
<Divider/>
<br/>

<Typography variant="h5" align="left" gutterBottom>
  Ingridients:
</Typography>
<Typography variant="body1" align="left" gutterBottom>
     Ingridients listed here.
   </Typography>
   <br/>
   <br/>

   <Typography variant="h5" align="left" gutterBottom>
     Steps:
   </Typography>
   <Typography variant="body1" align="left" gutterBottom>
     Instructions added here.
   </Typography>




</Container>
</React.Fragment>
)
};



export default ViewRecipe;
