import AxiosWithAuth from '../../utils/AxiosWithAuth';

export const FETCH_CHEF_START = 'FETCH_CHEF_START';
export const FETCH_CHEF_SUCCESS = 'FETCH_CHEF_SUCCESS';
export const FETCH_CHEF_FAILURE = 'FETCH_CHEF_FAILURE';

export const fetchChef = (id) => dispatch => {
    dispatch({ type: FETCH_CHEF_START });

    AxiosWithAuth()
    .get(`/api/chef/${id}`)
    .then(res => dispatch({ type: FETCH_CHEF_SUCCESS, payload: res.data}))
    .catch(error => dispatch({ type: FETCH_CHEF_FAILURE, payload: error}))
};