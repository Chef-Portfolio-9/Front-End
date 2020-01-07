import AxiosWithAuth from '../../utils/AxiosWithAuth';

// DELETE /recipes/:id <---- Deletes a specific recipe

export const DELETE_RECIPE = 'DELETE_RECIPE';
export const DELETE_RECIPE_SUCCESS = 'DELETE_RECIPE_SUCCESS';
export const DELETE_RECIPE_FAILURE = 'DELETE_RECIPE_FAILURE';

// ** ACTION CREATOR FUNCTION ** //

export const deleteRecipe = (id) => dispatch => {
    console.log(`recipe id: ${id}`);
    dispatch({ type: DELETE_RECIPE });
    axiosWithAuth()
        .delete(`https://chefprtfolio.herokuapp.com/api/recipes/${id}`)
        .then((res) => {
            dispatch({ type: DELETE_RECIPE_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.error('error', err)
            dispatch({ type: DELETE_RECIPE_FAILURE, payload: err });
        })
}