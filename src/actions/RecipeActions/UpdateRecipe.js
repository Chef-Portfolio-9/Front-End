import AxiosWithAuth from '../../AxiosWithAuth';

// PUT /recipes/:id <---- updates a specific recipe, must contain a change.

export const UPDATE_RECIPE_START = 'UPDATE_RECIPE_START';
export const UPDATE_RECIPE_SUCCESS = 'UPDATE_RECIPE_SUCCESS';
export const UPDATE_RECIPE_FAILURE = 'UPDATE_RECIPE_FAILURE';

// ** ACTION CREATOR FUNCTION ** //