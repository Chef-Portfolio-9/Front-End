import AxiosWithAuth from '../../AxiosWithAuth';

// GET /recipes/:id  <--- returns a specific recipe

export const FETCH_SPECIFIC_START = 'FETCH_SPECIFIC_START';
export const FETCH_SPECIFIC_SUCCESS = 'FETCH_SPECIFIC_SUCCESS';
export const FETCH_SPECIFIC_FAILURE = 'FETCH_SPECIFIC_FAILURE';

export const fetchSpecificRecipe = () => dispatch => {
    dispatch({ type: FETCH_SPECIFIC_START})

    AxiosWithAuth()
    .get('/recipes/:id')
    .then(res => dispatch({ type: FETCH_SPECIFIC_SUCCESS, payload: res.data}))
    .catch(error => dispatch({ type: FETCH_SPECIFIC_FAILURE, payload: error}))
};