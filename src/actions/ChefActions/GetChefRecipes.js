import AxiosWithAuth from '../../utils/AxiosWithAuth';

export const FETCH_CHEF_RECIPE_START = 'FETCH_CHEF_RECIPE_START';
export const FETCH_CHEF_RECIPE_SUCCESS = 'FETCH_CHEF_RECIPE_SUCCESS';
export const FETCH_CHEF_RECIPE_FAILURE = 'FETCH_CHEF_RECIPE_FAILURE';

export const fetchChefRecipes = (id) => dispatch => {
    dispatch({ type: FETCH_CHEF_RECIPE_START });
    
    AxiosWithAuth()
    .get(`/api/chefs/${id}/recipes`)
    .then(res => {
        dispatch({ type: FETCH_CHEF_RECIPE_SUCCESS, payload: res.data});
    })
    .catch(error => dispatch({ type: FETCH_CHEF_RECIPE_FAILURE, payload: error}))
};