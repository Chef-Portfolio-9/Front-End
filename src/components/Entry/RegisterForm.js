import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect, } from 'react-redux';
import { register } from '../../actions/EntryActions/RegisterAction';
import { makeStyles } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  mainCont: {
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: "url(https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
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
      color: 'black',
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "black"
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: '#c62828'
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: '#c62828'
    }
  },
  link: {
    textDecoration: 'none',
    color: '#c62828',
    '&:hover': {
      textDecoration: 'underline',
      textDecorationColor: '#c62828'
    }
  },
  specialFont: {
    fontWeight: 'bold',
    fontSize: 13
  },
  formCont: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10%'
  },
  paper: {
    width: 300,
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 5,
    paddingLeft: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.7)'
  },
  warning: {
    color: '#c62828',
    fontSize: '0.8rem',
    marginTop: -15,
    marginBottom: 10
  },
  req: {
    marginTop: -15,
    marginBottom: 10
  },
  title: {
    fontSize: '2.2rem'
  }
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

    const passWordLength = () => {
      return chef.password.length === 0 || chef.password.length > 5 ? (
        ""
      ) : (
        <Typography className={classes.warning}>
          Password must be at least 6 characters
        </Typography>
      );
    };

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
        
      <Container className={classes.mainCont} maxWidth="100%" style = {{height: '100vh', width: '100vw'}}>
          <form className={classes.formCont}>
          <Paper className={classes.paper}>
            <Typography className={classes.title} variant="h4">Register</Typography>
            <TextField
              style = {{width: 250, marginBottom: 20, marginTop: 10}}
              className={classes.input}
              margin="normal"
              variant="outlined"
              required
              id="outlined-name-input"
              label="Username"
              name="username"
              value={chef.username}
              onChange={handleChanges}
            />
            <TextField
              style = {{width: 250, marginBottom: 20}}
              className={classes.input}
              margin="normal"
              variant="outlined"
              required
              name="password"
              label="Password"
              type="password"
              id="outlined-password-input"
              value={chef.password}
              onChange={handleChanges}
            />   
            {passWordLength()}    
            <TextField
              style = {{width: 250, marginBottom: 20}}
              className={classes.input}
              margin="normal"
              variant="outlined"
              required
              id="outlined-email-input"
              label="location"
              name="location"
              value={chef.location}
              onChange={handleChanges}
            />
            <TextField
              style = {{width: 250, marginBottom: 20}}
              className={classes.input}
              margin="normal"
              variant="outlined"
              required
              id="outlined-restaurant-input"
              label="restaurant"
              name="restaurant"
              value={chef.restaurant}
              onChange={handleChanges}
            />
            <TextField
              style = {{width: 250, marginBottom: 20}}
              className={classes.input}
              margin="normal"
              variant="outlined"
              required
              id="outlined-full_name-input"
              label="Full Name"
              name="full_name"
              value={chef.full_name}
              onChange={handleChanges}
            />
            <Typography className={classes.req}>
              * Indicates a required field
            </Typography>       
            <Typography className={classes.specialFont}>Already have an account? Log in <Link className={classes.link} to='/login'>here</Link></Typography>
          <Button className={classes.loginBtn} onClick={handleSubmit} type="submit" variant="contained" color="secondary">
            Register
          </Button>
          </Paper>
        </form>
      </Container>
      );
    };
const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps,{ register })(RegisterForm);