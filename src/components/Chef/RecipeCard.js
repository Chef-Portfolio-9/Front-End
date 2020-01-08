//import libraries
import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';

export default function RecipeCard(props) {
    return (
        <div>

            <Card>
              <h4>{props.recipe.recipe_name}</h4>
            </Card>

        </div>
    );
};
