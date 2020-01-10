import React from 'react';
import './App.css';
import Splash from './components/Splash';
import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import LoginForm from "./components/Entry/LoginForm";
import GuestPage from "./components/Guest/GuestPage";
import RegisterForm from './components/Entry/RegisterForm';
import ChefDashboard from './components/Chef/ChefDashboard';
import RecipeList from './components/Chef/RecipeList';
import RecipeForm from './components/Chef/RecipeForm';
import PortfolioForm from './components/Chef/PortfolioForm';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import EditRecipe from './components/Chef/EditRecipe';
import ViewRecipe from './components/Chef/ViewRecipe';
// import AddIngredients from './components/Chef/AddIngredient';
// import AddSteps from './components/Chef/AddSteps';


const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Inria Serif'
    ]
  },
})


function App() {

  return (

    <div className="App">
    <ThemeProvider theme={theme}>
      <Route exact path='/' component={Splash} />
      <Route path='/login' component={LoginForm} /> 
      <Route path='/register' component={RegisterForm} />
      <Route path='/guest' component={GuestPage} />
      <PrivateRoute path='/ChefDashboard' component={ChefDashboard} />
      <PrivateRoute path='/recipeform' component={RecipeForm} />
      <PrivateRoute path='/viewrecipe' component={ViewRecipe} />
      <PrivateRoute path='/portfolioform' component={PortfolioForm} />
      <PrivateRoute path='/recipelist' component={RecipeList} />
      <PrivateRoute path='/editrecipe' component={EditRecipe} />
    </ThemeProvider>
    </div>
  );
};

export default App;
