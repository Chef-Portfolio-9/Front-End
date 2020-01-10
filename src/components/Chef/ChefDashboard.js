
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import  { fetchChef } from '../../actions/ChefActions/FetchChef';
import { fetchChefRecipes } from '../../actions/ChefActions/GetChefRecipes';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {deleteRecipe} from '../../actions/RecipeActions/DeleteRecipe';

//component imports
import ChefCard from './ChefCard.js';
import NavBar from '../NavBar.js';

//images
import frenchToast from '../../images/frenchToast.jpg';
import avatar from '../../images/avatar.jpg';
import RecipeCard from './RecipeCard';
import AxiosWithAuth from '../../utils/AxiosWithAuth';




const useStyles = makeStyles(theme =>({
    title: {
      fontSize: 14,
    },
    flex: {
      display: 'flex',
      aliginItems: 'center',
    },
    chefAbout: {
      display: 'flex',
      aliginItems: 'center',


    },
    pos: {
      marginBottom: 12,
    },
    media: {
      height:150,
      width: '50%',
      marginLeft: '25%',
      maxWidth: '100%',
      maxHeight: 'auto',

 },
 root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
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
     backgroundColor:'white',
     padding: '60px',
     display:'flex',
     justifyContent:'center',
  
   },
   buttons: {
     marginTop: theme.spacing(2),
   },
   cardGrid: {
     paddingTop: theme.spacing(8),
     paddingBottom: theme.spacing(8),
   },
   card: {
     height: '100%',
     display: 'flex',
     flexDirection: 'column',
   },
   cardMedia: {
     paddingTop: '56.25%', // 16:9
   },
   cardContent: {
     flexGrow: 1,
   },
   avatar: {
    width: theme.spacing(18),
    height: theme.spacing(18),
    marginLeft: '38%',
   },
}));

const cards = [1, 2, 3, 4, 5, 6];

const ChefDashboard = (props) => {
    const classes = useStyles();
    const userID = localStorage.getItem("userID");

    const [recipes, setRecipes] = useState();

    console.log('checking for recipes', recipes)

    useEffect(() => {
        props.fetchChef(userID);
      }, []);
      console.log('this is props', props);

      useEffect(() => {
        props.fetchChefRecipes(userID);
        setRecipes(props.chefRecipes)
      }, [recipes]);
      console.log('this is props', props);


    const editProfile = event => {
      event.preventDefault();
      props.history.push('/portfolioform')
    };

    const addRecipe = event => {
      event.preventDefault();
      props.history.push('/recipeform')
    };

      return (

        <React.Fragment>
        <NavBar/>
      <CssBaseline />
      <main>
        {/* header */}
        <div className={classes.header}>
          <Container maxWidth="sm">
               <Avatar className = {classes.avatar} alt="Chef Jonathan" src={avatar} />
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            {props.chefInfo.full_name}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            {props.chefInfo.location}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Restaurant: {props.chefInfo.restaurant}
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justify="center">
                <Grid item>

                </Grid>
                <Grid item>
                  <Button onClick={editProfile} variant="outlined" color="primary">
                  Edit Profile
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End header */}
          <Typography component="h3" variant="h3" align="left" color="textPrimary" gutterBottom>
          Recipes:  <Button onClick={addRecipe} variant="contained" color="primary">
              Add Recipe
            </Button>
          </Typography>
          <Grid container spacing={4}>
            {props.chefRecipes.map(recipe=>{
              return(
                <RecipeCard recipe={recipe}/>
              )
            })}
            {/* {props.chefRecipes.map(card => (
              console.log('checking recipes', card),
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={frenchToast}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.recipe_name}
                    </Typography>
                    <Typography>
                      By: {props.chefInfo.full_name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                    <Button onClick={deleteRecipe} size="small" color="primary">
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))} */}
          </Grid>
        </Container>
      </main>


    </React.Fragment>



    );
};

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, { fetchChef, fetchChefRecipes, deleteRecipe })(ChefDashboard);
