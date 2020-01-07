import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect, } from 'react-redux';
import { register } from '../../utils/actions/EntryActions/RegisterAction';

const RegisterForm = props => {
    const [chef, setChef] = useState({
        username: '',
        password: '',
        full_name: '',
        location: '', 
    });

    console.log('checking for chef', chef);

    const handleSubmit = event => {
        event.preventDefault();
        props.register(chef);
        props.history.push('/register')
    }

    const handleChanges = event => {
        event.preventDefault();
        setChef({...chef, [event.target.name]: event.target.value})
    };

    return (
        <div>
          <Typography variant="h4">Register</Typography>

            <Grid container spacing={2}>

         <Grid item xs={12} sm={6}>
         </Grid>
         <Grid item xs={12} sm={6}>
           <TextField
             margin="normal"
             variant="outlined"
             required
             fullWidth
             id="outlined-name-input"
             label="Username"
             name="username"
             value={chef.username}
             onChange={handleChanges}
           />
         </Grid>
         <Grid item xs={12}>
         <TextField
             margin="normal"
             variant="outlined"
             required
             fullWidth
             id="outlined-full_name-input"
             label="Full Name"
             name="full_name"
             value={chef.full_name}
             onChange={handleChanges}
           />
           <TextField
             margin="normal"
             variant="outlined"
             required
             fullWidth
             id="outlined-email-input"
             label="location"
             name="location"
             value={chef.location}
             onChange={handleChanges}
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
             id="outlined-password-input"
             value={chef.password}
             onChange={handleChanges}
           />
         </Grid>

         </Grid>
           <div> <br/> </div>
         <Button onClick={handleSubmit} type="submit" variant="contained" color="secondary">
          Register
        </Button>
        </div>
      );
    };
const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps,{ register })(RegisterForm);