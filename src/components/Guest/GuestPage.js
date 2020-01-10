/* jshint esversion: 6 */
import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import GuestRecipeList from './GuestRecipeList';
import NavBar from '../NavBar.js';
import RecipeList from '../Chef/RecipeList'


const GuestPage = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");


return(
<React.Fragment>
  <NavBar/>
<Container maxWidth= "md">


<TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="searchCuisine"
        label="By Cuisine"
        placeholder="Search"
        name="cuisine"
        type="search"
        autoComplete="cuisine"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="location"
        label="By Location"
        placeholder="Search"
        type="search"
        id="search"
        autoComplete="location"
      />

      <GuestRecipeList />
    {/*  <RecipeList/> */}

</Container>
</React.Fragment>
)
};



export default GuestPage;
