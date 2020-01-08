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




function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Splash} />
      <Route path='/login' component={LoginForm} />
      <Route path='/guest' component={GuestPage} />
      <Route path='/register' component={RegisterForm} />
      <PrivateRoute path='/ChefDashboard' component={ChefDashboard} />
      <PrivateRoute path='/recipeform' component={RecipeForm} />
      <PrivateRoute path='/portfolioform' component={PortfolioForm} />
      <PrivateRoute path='/recipelist' component={RecipeList} />
    </div>
  );
};

export default App;
