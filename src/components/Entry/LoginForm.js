import React, { useState } from "react";
import { Link } from "react-router-dom";
import  AxiosWithAuth from '../../utils/AxiosWithAuth';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Paper } from "@material-ui/core";


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
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    marginTop: '15%'
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
  title: {
    fontSize: '2.2rem',
    marginBottom: -20
  },
}));            


const LoginForm = props => {
  const classes = useStyles();
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const handleChanges = e => {
    let name = e.target.name;
    setCredentials({ ...credentials, [name]: e.target.value });
  };
  const loginForm = e => {
    e.preventDefault();
    console.log(credentials.username);
    console.log(credentials.password);
    console.log(credentials);
    AxiosWithAuth()
      .post('/api/auth/chefs/login', credentials)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userID", res.data.id);
        console.log(res.data);
        // localStorage.setItem("userId", res.data.user_id);
        // props.history.push(`/chefdashboard/${localStorage.getItem("userId")}`);
        props.history.push("/ChefDashboard");
      })
      .catch(err => console.log(err));
  };
    return (  
    <Container className={classes.mainCont} maxWidth="100%" style = {{height: '100vh', width: '100vw'}}>
    <form className={classes.form} onSubmit={loginForm}>
      <Paper className={classes.paper}>
      <Typography className={classes.title} variant="h4">Login</Typography>
      <div> <br/> </div>
      <TextField
        style = {{width: 250, marginBottom: 20, marginTop: 10}}
        className={classes.input}
        variant="outlined"
        margin="normal"
        required
        id="username"
        label="User Name"
        name="username"
        autoFocus
        value={credentials.username}
        onChange={handleChanges}
      />
      <TextField
        style = {{width: 250, marginBottom: 20, marginTop: 10}}
        className={classes.input}
        variant="outlined"
        margin="normal"
        required
        name="password"
        label="Password"
        type="password"
        id="password"
        value={credentials.password}
        onChange={handleChanges}
      />
      <Typography className={classes.specialFont}>Don't have an account? Sign up <Link className={classes.link} to='/register'>here</Link></Typography>
      <Button className={classes.loginBtn} type="submit" variant="contained" color="secondary" margin="normal">
        Login
      </Button>
      </Paper>
      </form>
</Container>
)
};
export default LoginForm;
