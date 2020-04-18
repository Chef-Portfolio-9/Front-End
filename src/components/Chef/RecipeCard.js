/* jshint esversion: 6 */
import React from "react";
import Card from "@material-ui/core/Card";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//import components
import { deleteRecipe } from "../../actions/RecipeActions/DeleteRecipe";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 14,
  },
  flex: {
    display: "flex",
    aliginItems: "center",
  },
  chefAbout: {
    display: "flex",
    aliginItems: "center",
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 150,
    width: "50%",
    marginLeft: "25%",
    maxWidth: "100%",
    maxHeight: "auto",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 400,
    height: 450,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  header: {
    backgroundColor: "white",
    padding: "60px",
    display: "flex",
    justifyContent: "center",
  },
  buttons: {
    marginTop: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    boxShadow: "3px 3px 2px gray",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  avatar: {
    width: theme.spacing(18),
    height: theme.spacing(18),
    marginLeft: "38%",
  },
  chefTitle: {
    textDecoration: "underline",
    textDecorationColor: "#c62828",
  },
  cardBtns: {
    backgroundColor: "#c62828",
    "&:hover": {
      backgroundColor: "#e53935",
    },
  },
  btnCont: {
    display: "flex",
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
  },
}));

const RecipeCard = (props) => {
  const classes = useStyles();

  const recipe_id = props.recipe.id;

  const submitDelete = (event) => {
    event.preventDefault();
    props.deleteRecipe(recipe_id);
    document.location.reload("/ChefDashboard");
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={"https://source.unsplash.com/featured/?Food"}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography className={classes.chefTitle}>Recipe Name</Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {props.recipe.recipe_name}
          </Typography>
          <Typography className={classes.chefTitle}>Chef</Typography>
          <Typography>{props.chefInfo.full_name}</Typography>
        </CardContent>
        <CardActions className={classes.btnCont}>
          <Link className={classes.link} to={`/editRecipe/${recipe_id}`}>
            <Button className={classes.cardBtns}>Edit Recipe</Button>
          </Link>
          <Button className={classes.cardBtns} onClick={submitDelete}>
            Remove Recipe
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, { deleteRecipe })(RecipeCard);
