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

const theme = createMuiTheme({
  body: {
    backgroundImage: "url(https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80)"
  }
})


function App() {
  
  return (
    
    <div className="App">
      <Route exact path='/' component={Splash} />
      <ThemeProvider theme={theme}>
        <Route path='/login' component={LoginForm} />
      </ThemeProvider>
      <Route path='/guest' component={GuestPage} />
      <Route path='/register' component={RegisterForm} />
      <PrivateRoute path='/ChefDashboard' component={ChefDashboard} />
      <PrivateRoute path='/recipeform' component={RecipeForm} />
      <PrivateRoute path='/portfolioform' component={PortfolioForm} />
      <PrivateRoute path='/recipelist' component={RecipeList} />
      <PrivateRoute path='/editrecipe' component={EditRecipe} />
    </div>
  );
};

export default App;
