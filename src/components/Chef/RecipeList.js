//import libraries
import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import axios from 'axios'
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
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
import Link from '@material-ui/core/Link';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import frenchToast from '../../images/frenchToast.jpg';


//import components
import RecipeCard from './RecipeCard'

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
    width: 600,
    height: 450,
  },
  icon: {
     marginRight: theme.spacing(2),
   },
   header: {
     backgroundColor:'white',
     padding: '60px',


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

const cards = [1,2,3,4,5,6];





export default function RecipeList(){

    const [RecipeList, setRecipeList] = useState([])
    const classes = useStyles();

    useEffect(() => {
        axios
        .get('https://chefprtfolio.herokuapp.com/api/dish/')
        .then(res => {
            console.log('recipe list', res)
            setRecipeList(res.data)
        })
        .catch(err => {
            console.log('recipe list err', err)
        })
    }, [])

    return(
        {/* <div>
            <Grid
            container
            xs={12} sm={6} md={4}
            justify="center"
            alignItems="center"
            >
                {RecipeList.map(recipe => {
                    return <RecipeCard recipe={recipe}/>
                })}
            </Grid>
        </div> */},
        <Grid container spacing={4}>
          {cards.map(card => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={frenchToast}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Fantastic French Toast
                  </Typography>
                  <Typography>
                    By:{RecipeList.recipe_name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>



    );
};
