/* jshint esversion: 6 */

import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import { login } from '../utils/actions/EntryActions/LoginAction';

const LoginForm = props => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  console.log('checking for user', user);

  const handleSubmit = event => {
    event.preventDefault();
    props.login(user);
    props.history.push('/')
  }

  const handleChanges = event => {
    event.preventDefault();
    setUser({...user, [event.target.name]: event.target.value})
  };

  return (

    <Container maxWidth="sm">
      <Typography variant="h4"> User Login </Typography>
      <div> <br/> </div>
      <FormControlLabel
        value="top"
        control={<Switch color="primary" />}
        label="Chef"
        labelPlacement="top"
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="username"
        label="User Name"
        name="username"
        autoFocus
        value={user.username}
        onChange={handleChanges}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        value={user.password}
        onChange={handleChanges}
      />
      <div> <br/> </div>
      <Button onClick={handleSubmit} type="submit" variant="contained" color="secondary" margin="normal">
        Login
      </Button>
</Container>)
}

const mapStateToProps = state => {
  return state;
};


export default connect(mapStateToProps, { login })(LoginForm);
