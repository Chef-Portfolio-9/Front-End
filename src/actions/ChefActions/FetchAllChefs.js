import AxiosWithAuth from '../../utils/AxiosWithAuth';

export const FETCH_ALL_CHEFS_START = 'FETCH_ALL_CHEFS_START';
export const FETCH_ALL_CHEFS_SUCCESS = 'FETCH_ALL_CHEFS_SUCCESS';
export const FETCH_ALL_CHEFS_FAILURE = 'FETCH_ALL_CHEFS_FAILURE';

export const fetchAllChefs = (id) => dispatch => {
    dispatch({ type: FETCH_ALL_CHEFS_START });
    
    AxiosWithAuth()
    .get('/api/chefs/')
    .then(res => {
        dispatch({ type: FETCH_ALL_CHEFS_SUCCESS, payload: res.data});
    })
    .catch(error => dispatch({ type: FETCH_ALL_CHEFS_FAILURE, payload: error}))
};