import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect, } from 'react-redux';
import { register } from '../../actions/EntryActions/RegisterAction';
import { makeStyles } from "@material-ui/core";
import Container from '@material-ui/core/Container';
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
    marginTop: '2%',
    '& label.Mui-focused': {
      color: '#c62828',
    },
  },
  link: {
    textDecoration: 'none',
    color: '#c62828'
  },
  specialFont: {
    fontWeight: 'bold'
  },
}));            

const RegisterForm = props => {
  const classes = useStyles();
    const [chef, setChef] = useState({
        username: '',
        password: '',
        full_name: '',
        location: '',
        restaurant: '' 
    });

    console.log('checking for chef', chef);

    const handleSubmit = event => {
        event.preventDefault();
        props.register(chef);
        props.history.push('/login')
    }

    const handleChanges = event => {
        event.preventDefault();
        setChef({...chef, [event.target.name]: event.target.value})
    };

    return (
        
      <Container className={classes.mainCont} maxWidth="sm">
          <Typography variant="h4">Register</Typography>
           <TextField
            className={classes.input}
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
           <TextField
            className={classes.input}
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
           <TextField
            className={classes.input}
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
           <TextField
            className={classes.input}
            margin="normal"
            variant="outlined"
            required
            fullWidth
            id="outlined-restaurant-input"
            label="restaurant"
            name="restaurant"
            value={chef.restaurant}
            onChange={handleChanges}
           />
           <TextField
            className={classes.input}
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
           <Typography className={classes.specialFont}>Already have an account? Log in <Link className={classes.link} to='/login'>here</Link></Typography>
         <Button className={classes.loginBtn} onClick={handleSubmit} type="submit" variant="contained" color="secondary">
          Register
        </Button>
      </Container>
      );
    };
const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps,{ register })(RegisterForm);