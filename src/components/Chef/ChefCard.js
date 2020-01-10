/* jshint esversion: 6 */

import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import frenchToast from '../../images/frenchToast.jpg';

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
const ChefCard = (props) => {

    const classes = useStyles();

    const deleteRecipe = event => {
      event.preventDefault();
      props.deleteRecipe(props.recipes.id)
    };

    return (
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={frenchToast}
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.chefInfo.recipe_name}
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
    );
};

export default ChefCard;
