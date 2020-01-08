import AxiosWithAuth from '../../utils/AxiosWithAuth';

export const UPDATE_CHEF_START = 'UPDATE_CHEF_START';
export const UPDATE_CHEF_SUCCESS = 'UPDATE_CHEF_SUCCESS';
export const UPDATE_CHEF_FAILURE = 'UPDATE_CHEF_FAILURE';

export const updateChef = (updatedChef, id) => dispatch => {
    dispatch({ type: UPDATE_CHEF_START });
    
     AxiosWithAuth()
    .put(`/api/chefs/${id}`, updatedChef)
    .then(res => dispatch({ type: UPDATE_CHEF_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: UPDATE_CHEF_FAILURE, payload: error }));
}