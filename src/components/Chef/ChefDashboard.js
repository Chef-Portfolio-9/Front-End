import React, { useEffect } from 'react';
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

//component imports
import ChefCard from './ChefCard.js';
import NavBar from '../NavBar.js';

//images
import chefPic from './chefPic.jpg';
import frenchToast from './frenchToast.jpg';
import cover from './coverPhoto.jpg';

const useStyles = makeStyles(theme =>({
    card: {
      mxnWidth: 275,
    },
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
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const ChefDashboard = (props) => {
    const classes = useStyles();
    const userID = localStorage.getItem("userID");

    useEffect(() => {
        props.fetchChef(userID);
      }, []);
      console.log(props);

      return (
        <div>
            <NavBar/>
      <hr/>
            <div className = "flex" >
            <div className="chefAbout">

              {/*   <i class="fas fa-user fa-10x"></i>*/}
                {/*  <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                       {props.chefInfo.full_name}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {props.chefInfo.location}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        hi
                    </Typography>
                    <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>*/}
            <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={cover}
          title="chef profile pic"

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.chefInfo.full_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.chefInfo.location}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

            </div>


            <div className={classes.root}>
      <GridList cellHeight={250} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Recipes:</ListSubheader>
        </GridListTile>

          <GridListTile key={"frechToast"}>
            <img src={frenchToast} alt={props.chefInfo.full_name} />
            <GridListTileBar
              title={'Fantastic French Toast'}
              subtitle={<span>by: {props.chefInfo.full_name}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${props.chefInfo.full_name}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        )
      </GridList>
    </div>
    </div>



        </div>
    );
};

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, { fetchChef, fetchChefRecipes })(ChefDashboard);


//.map function not in use

    {/* {props.chefInfo.full_name.map(tile => ()} */}
