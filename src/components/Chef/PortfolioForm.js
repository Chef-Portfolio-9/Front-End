/* jshint esversion: 6 */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { updateChef } from '../../actions/ChefActions/UpdateChef';
import { deleteChef } from '../../actions/ChefActions/DeleteChef';
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  DialogTitle,
  Dialog,
  ListItemText,
  Button,
  TextField,
  Container,
  Switch,
  FormControlLabel,
  Typography,
  TextareaAutosize,
  Paper,
  Grid,
  Box,
  Checkbox,
  CssBaseline,
  Link,
  Divider
} from "@material-ui/core";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  upload:{
    display:"none",
  }
}));

const PortfolioForm = (props) => {
  const classes = useStyles();
  const userID = localStorage.getItem("userID");

  const [chef, setChef] = useState({
        username: '',
        password: '',
        full_name: '',
        location: '',
        restaurant: ''
  });

  console.log('checking for chef', chef)

  useEffect(() => {
    props.updateChef(userID);
  }, []);
  console.log(props);

  const handleChanges = event => {
    event.preventDefault();
    setChef({...chef, [event.target.name]: event.target.value})
  };

  const submitChanges = event => {
    const updatedChef = {
      username: chef.username,
      password: chef.password,
      full_name: chef.full_name,
      location: chef.location,
      restaurant: chef.restaurant
    };
    event.preventDefault();
    props.updateChef(updatedChef, userID);
    props.history.push('/chefDashboard')
  }

  const submitDelete = event => {
    event.preventDefault();
    props.deleteChef(userID);
    props.history.push('/');
  };
  


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>

        </Avatar>
        <Typography component="h1" variant="h5">
          Create Chef Portfolio
        </Typography>
        <form onSubmit={submitChanges} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="User Name"
                name="username"
                value={chef.username}
                onChange={handleChanges}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="location"
                label="Location"
                name="location"
                value={chef.location}
                onChange={handleChanges}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="restaurant"
                label="Restaurant"
                type="text"
                id="restaurant"
                value={chef.restaurant}
                onChange={handleChanges}
              />
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="text"
                id="password"
                value={chef.password}
                onChange={handleChanges}
              />
              <TextField
                variant="outlined"
                required
                fullWidth
                name="full_name"
                label="full name"
                type="text"
                id="full_name"
                value={chef.full_name}
                onChange={handleChanges}
              />
            </Grid>

            <Button  variant="contained" component="label">
              Upload Profile Image
              <input
                type="file"
                style={{ display: "none"}}
              />
            </Button>

          </Grid>
          <br />
          <Divider />
          <br />
          <Typography component="h1" variant="h5">
            Add Recipes:
          </Typography>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            <AddIcon style={{ fontSize: 25 }} />
          </Button>

          <br />
          <br />
          <Divider />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Update
          </Button>
          <Button
            onClick={submitDelete}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Delete Profile
          </Button>
        </form>
      </div>
    </Container>
  );
};

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, { updateChef, deleteChef })(PortfolioForm)
