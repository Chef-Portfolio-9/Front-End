import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import axios from 'axios'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

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
    boxShadow: '3px 3px 2px gray'
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
   chefInformation: {
     textDecoration: 'underline',
     textDecorationColor: '#c62828'
   }
}));

export default function GuestRecipeList(){
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
        <Grid container spacing={4}>
          {RecipeList.map(card => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={'https://source.unsplash.com/featured/?Food'}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography className={classes.chefInformation}>
                    Recipe
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.recipe_name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
    );
};
