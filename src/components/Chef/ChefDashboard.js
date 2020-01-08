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

const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const ChefDashboard = (props) => {
    const classes = useStyles();
    const userID = localStorage.getItem("userID");
    
    useEffect(() => {
        props.fetchChef(userID);
        props.fetchChefRecipes(userID);
      }, []);
      console.log(props);
    
      return (
        <div>
            <h1>Chef Portfolio Dashboard</h1>
            <hr/>
            <div className="chef-about">
                <i class="fas fa-user fa-10x"></i>
                <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                       {props.chefInfo.full_name}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {props.chefInfo.location}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Hi
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
            </Card>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, { fetchChef, fetchChefRecipes })(ChefDashboard);