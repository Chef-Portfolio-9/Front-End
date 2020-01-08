/* jshint esversion: 6 */

import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import { login } from '../../actions/EntryActions/LoginAction';
import { makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  mainCont: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10%'
  },
  loginBtn: {
    width: 85,
    margin: '0 auto' ,
    backgroundColor: '#c62828',
        '&:hover': {
            backgroundColor: '#e53935'
        },
    marginTop: 20
  },
  input: {
    width: '60%',
    margin: '0 auto',
    marginBottom: '5%',
    '& label.Mui-focused': {
      color: '#c62828',
    },
  },
  link: {
    textDecoration: 'none',
    color: '#c62828'
  },
  specialFont: {
    fontWeight: 'bold',
    fontSize: 13
  },
}));            

const LoginForm = props => {
  const classes = useStyles();
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  console.log('checking for user', user);

  const handleSubmit = event => {
    event.preventDefault();
    props.login(user);
    
    props.history.push('/ChefDashboard')
  }

  const handleChanges = event => {
    event.preventDefault();
    setUser({...user, [event.target.name]: event.target.value})
  };

  return (

    <Container className={classes.mainCont} maxWidth="sm">
      <Typography variant="h4"> User Login </Typography>
      <div> <br/> </div>
      <FormControlLabel
        value="top"
        control={<Switch color="primary" />}
        label="Chef"
        labelPlacement="top"
      />
      <TextField
        className={classes.input}
        variant="outlined"
        margin="normal"
        required
        id="username"
        label="User Name"
        name="username"
        autoFocus
        value={user.username}
        onChange={handleChanges}
      />
      <TextField
        className={classes.input}
        variant="outlined"
        margin="normal"
        required
        name="password"
        label="Password"
        type="password"
        id="password"
        value={user.password}
        onChange={handleChanges}
      />
      <Typography className={classes.specialFont}>Don't have an account? Sign up <Link className={classes.link} to='/register'>here</Link></Typography>
      <Button className={classes.loginBtn} onClick={handleSubmit} type="submit" variant="contained" color="secondary" margin="normal">
        Login
      </Button>
</Container>)
}

const mapStateToProps = state => {
  return state;
};


export default connect(mapStateToProps, { login })(LoginForm);
