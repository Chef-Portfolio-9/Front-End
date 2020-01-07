import React from 'react';
import './App.css';
import Splash from './components/Splash';
import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import LoginForm from "./components/LoginForm.js";
import GuestPage from "./components/GuestPage.js";
import RecipeList from './components/RecipeList';
import RegisterForm from './components/RegisterForm';


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Splash} />
      <Route path='/login' component={LoginForm} />
      <Route path='/guest' component={GuestPage} />
      <Route path='/register' component={RegisterForm} />
    </div>
  );
};

export default App;
