import AxiosWithAuth from '../../utils/AxiosWithAuth';

export const DELETE_CHEF_START = 'DELETE_CHEF_START';
export const DELETE_CHEF_SUCCESS = 'DELETE_CHEF_SUCCESS';
export const DELETE_CHEF_FAILURE = 'DELETE_CHEF_FAILURE';

export const deleteChef = (id) => dispatch => {
    dispatch({ type: DELETE_CHEF_START });
    
    AxiosWithAuth()
    .delete(`/api/chefs/${id}`)
    .then(res => {
        dispatch({ type: DELETE_CHEF_SUCCESS, payload: res.data});
    })
    .catch(error => dispatch({ type: DELETE_CHEF_FAILURE, payload: error}))
};