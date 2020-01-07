import AxiosWithAuth from '../../AxiosWithAuth';

// POST /recipes  <---- creates a recipe, MUST INCLUDE (recipe_name & chef_id)

export const CREATE_RECIPE_START = 'CREATE_RECIPE_START';
export const CREATE_RECIPE_SUCCESS = 'CREATE_RECIPE_SUCCESS';
export const CREATE_RECIPE_FAILURE = 'CREATE_RECIPE_FAILURE';

// ** ACTION CREATOR FUNCTION ** //