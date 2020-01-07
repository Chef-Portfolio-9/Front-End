import React from 'react';
import ChefCard from './ChefCard';
import { connect } from 'react-redux';
import  { fetchChef } from '../../actions/ChefActions/FetchChef';

const ChefDashboard = (props) => {
    console.log(props.chefInfo)
    return (
        <div>
            <h1>Chef Portfolio Dashboard</h1>
            <hr/>
            <div className="chef-about">
                <i class="fas fa-user fa-10x"></i>
                <ChefCard />
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    console.log(state.chefInfo)
    return state;  
};


export default connect(mapStateToProps, { fetchChef })(ChefDashboard);