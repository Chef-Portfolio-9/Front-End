import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import  { fetchChef } from '../../actions/ChefActions/FetchChef';
import { fetchChefRecipes } from '../../actions/ChefActions/GetChefRecipes';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { Button } from '@material-ui/core';
import {deleteRecipe} from '../../actions/RecipeActions/DeleteRecipe';
//component imports
import NavBar from '../NavBar.js';
//images
import frenchToast from '../../images/frenchToast.jpg';
import RecipeCard from './RecipeCard';




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
    border: '0.5px solid red'
   },
   addRecipeBtn: {
    backgroundColor: '#c62828',
    '&:hover': {
        backgroundColor: '#e53935'
    },
   }
}));

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
              <Avatar className = {classes.avatar} alt="Chef Jonathan" src={'https://source.unsplash.com/featured/?chef'}/>
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
          <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>
            Recipes
          </Typography>
          <Button className={classes.addRecipeBtn} onClick={addRecipe} variant="contained" color="primary">
              Add Recipe
          </Button>
          <Grid container spacing={4}>
            {props.chefRecipes.map(recipe=>{
              return(
                <RecipeCard recipe={recipe}/>
              )
            })}
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
