// /* jshint esversion: 6 */

// import React, { useState } from "react";
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import { connect } from "react-redux";
// import { login } from '../../actions/EntryActions/LoginAction';
// import { makeStyles } from "@material-ui/core";
// import { Link } from 'react-router-dom';

// const useStyles = makeStyles(theme => ({
//   mainCont: {
//     display: 'flex',
//     flexDirection: 'column',
//     marginTop: '10%',
//   },
//   loginBtn: {
//     width: 85,
//     margin: '0 auto' ,
//     backgroundColor: '#c62828',
//         '&:hover': {
//             backgroundColor: '#e53935'
//         },
//     marginTop: 20
//   },
//   input: {
//     width: '60%',
//     margin: '0 auto',
//     marginBottom: '5%',
//     '& label.Mui-focused': {
//       color: '#c62828',
//     },
//   },
//   link: {
//     textDecoration: 'none',
//     color: '#c62828'
//   },
//   specialFont: {
//     fontWeight: 'bold',
//     fontSize: 13
//   },
// }));            

// const LoginForm = props => {
//   const classes = useStyles();
//   const [user, setUser] = useState({
//     username: '',
//     password: '',
//   });

//   const handleSubmit = event => {
//     event.preventDefault();
//     props.login(user);
//     props.history.push('/ChefDashboard')
//   };

//   const handleChanges = event => {
//     event.preventDefault();
//     setUser({...user, [event.target.name]: event.target.value})
//   };

//   return (
//     <Container className={classes.mainCont} maxWidth="sm">
//     <form onSubmit={handleSubmit}>
//       <Typography variant="h4"> User Login </Typography>
//       <div> <br/> </div>
//       <TextField
//         className={classes.input}
//         variant="outlined"
//         margin="normal"
//         required
//         id="username"
//         label="User Name"
//         name="username"
//         autoFocus
//         value={user.username}
//         onChange={handleChanges}
//       />
//       <TextField
//         className={classes.input}
//         variant="outlined"
//         margin="normal"
//         required
//         name="password"
//         label="Password"
//         type="password"
//         id="password"
//         value={user.password}
//         onChange={handleChanges}
//       />
//       <Typography className={classes.specialFont}>Don't have an account? Sign up <Link className={classes.link} to='/register'>here</Link></Typography>
//       <Button className={classes.loginBtn} type="submit" variant="contained" color="secondary" margin="normal">
//         Login
//       </Button>
      
//       </form>
// </Container>
// )
// }

// const mapStateToProps = state => {
//   return state;
// };


// export default connect(mapStateToProps, { login })(LoginForm);

import React, { useState } from "react";
import { Link } from "react-router-dom";
import  AxiosWithAuth from '../../utils/AxiosWithAuth';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  mainCont: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10%',
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
    <Container className={classes.mainCont} maxWidth="sm">
    <form onSubmit={loginForm}>
      <Typography variant="h4"> User Login </Typography>
      <div> <br/> </div>
      <TextField
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
      </form>
</Container>
)
};
export default LoginForm;
