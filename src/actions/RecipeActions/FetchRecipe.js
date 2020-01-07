import AxiosWithAuth from '../../AxiosWithAuth';

// GET /recipes  <--- returns a list of all the recipes

export const FETCH_RECIPES_START = 'FETCH_START';
export const FETCH_RECIPES_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_RECIPES_FAILURE = 'FETCH_FAILURE';

export const fetchRecipes = () => dispatch => {
    dispatch({ type: FETCH_RECIPES_START });

    AxiosWithAuth()
    .get('/recipes')
    .then(res => dispatch({ type: FETCH_RECIPES_SUCCESS, payload: res.data}))
    .catch(error => dispatch({ type: FETCH_RECIPES_FAILURE, payload: error}))
};