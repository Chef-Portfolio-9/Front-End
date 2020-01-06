/* jshint esversion: 6 */

import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


const LoginPage = () => {

return(


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
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
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
        autoComplete="current-password"
      />
      <div> <br/> </div>
      <Button variant="contained" color="secondary" margin="normal">
  Login
</Button>
<div> <br/> </div>
<Divider />
<div> <br/> </div>
<Typography variant="h4">Register</Typography>

   <Grid container spacing={2}>

            <Grid item xs={12} sm={6}>
              <TextField
                  margin="normal"
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                margin="normal"
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>

            </Grid>
              <div> <br/> </div>
            <Button variant="contained" color="secondary">
        Register
      </Button>


</Container>


)




}


export default LoginPage;
