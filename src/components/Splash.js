import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper'; 
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
      width: 400, 
      height: 250,
      display: 'flex',
      flexDirection: 'column',  
      justifyContent: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
    containerStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: "url(https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80)",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        margin: '0 auto'
    },
    splashbtns: {
        width: 100,
        marginTop: 20,
        backgroundColor: '#c62828',
        '&:hover': {
            backgroundColor: '#e53935'
        }
    },
    btnCont: {
        display: 'flex',
        justifyContent: 'space-evenly'
    },
  }));            


const Splash = props => {

    const classes = useStyles();

    const chefLogin = event => {
        event.preventDefault();
        props.history.push('/login');
    };

    const guestDirect = event => {
        event.preventDefault();
        props.history.push('/guest');
    };
    
    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container className={classes.containerStyle} maxWidth="100%" style = {{height: '100vh', width: '100vw'}} >
                    <Paper className={classes.root}>
                        <Typography variant="h4" component="h3">
                            Welcome to Chef Portfolio!
                        </Typography>
                        <Typography component="p">
                            Please choose one
                        </Typography>
                        <div className={classes.btnCont}>
                            <Button onClick={chefLogin}  className={classes.splashbtns} variant="contained" color="primary">
                                Chef
                            </Button>
                            <Button onClick={guestDirect} className={classes.splashbtns} variant="contained" color="primary">
                                Guest
                            </Button>
                        </div>
                    </Paper>
                </Container>
            </React.Fragment>
        </div>
    );
};

export default Splash;