/* jshint esversion: 6 */

import React from "react";
import PropTypes from "prop-types";
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

const PortfolioForm = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>

        </Avatar>
        <Typography component="h1" variant="h5">
          Create Chef Portfolio
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Name"
                label="Name"
                name="Name"
                autoComplete="Name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Location"
                label="Location"
                name="Location"
                autoComplete="Location"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Restaurants"
                label="Restaurants"
                type="Restaurants"
                id="Restaurants"
                autoComplete="Restaurants"
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
        </form>
      </div>
    </Container>
  );
};

export default PortfolioForm;
