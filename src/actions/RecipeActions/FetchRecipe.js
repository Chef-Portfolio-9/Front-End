import AxiosWithAuth from '../../utils/AxiosWithAuth';

// GET /recipes  <--- returns a list of all the recipes

export const FETCH_RECIPES = 'FETCH_START';
export const FETCH_RECIPES_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_RECIPES_FAILURE = 'FETCH_FAILURE';

export const getRecipes = () => dispatch => {
    dispatch({ type: FETCH_RECIPES });
    console.log('get recipes')
    AxiosWithAuth()
        .get('/api/dish/')
        .then(res => {
            console.log(res.data);
            dispatch({ type: FETCH_RECIPES_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: FETCH_RECIPES_FAILURE, payload: err });
        })
};
