/* jshint esversion: 6 */
import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import GuestRecipeList from './GuestRecipeList';
import NavBar from '../NavBar.js';
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from '@material-ui/core/InputAdornment';

const GuestPage = (props) => {

  const [searchRecipe, setSearchRecipe] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    setSearchRecipe(props.RecipeList);
  },[])

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const submitSearch = event => {
    event.preventDefault();
    const search = searchRecipe.filter(recipe =>
      recipe.Name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchRecipe(search);
  };

return(
  <React.Fragment>
  <NavBar/>
    <Container maxWidth= "md">
      <br/>
      <form onSubmit={submitSearch}>
      <TextField
          onChange={handleInputChange}
          value={query}
          variant="outlined"
          margin="normal"
          required
          width
          id="searchRecipe"
          label="By Recipe"
          placeholder="Search"
          name="recipe"
          type="search"
          autoComplete="recipe"
          autoFocus
          InputProps={{
          endAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
    )
    }}
    />
    </form>
      <GuestRecipeList/>
    </Container>
  </React.Fragment>
);
};

export default GuestPage;
