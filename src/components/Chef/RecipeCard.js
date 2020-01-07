//import libraries
import React, { useEffect } from 'react'
import { Card } from '@material-ui/core'

export default function RecipeCard(props) {
    return (
        <div>
            <Card>
                <p>Dish: {props.recipe.recipe_name}</p>
            </Card>
        </div>
    );
};
