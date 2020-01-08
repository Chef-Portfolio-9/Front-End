import AxiosWithAuth from '../../utils/AxiosWithAuth';

// PUT /recipes/:id <---- updates a specific recipe, must contain a change.

export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const UPDATE_RECIPE_SUCCESS = 'UPDATE_RECIPE_SUCCESS';
export const UPDATE_RECIPE_FAILURE = 'UPDATE_RECIPE_FAILURE';

// ** ACTION CREATOR FUNCTION ** //

export const updateRecipe= recipe=> dispatch=>{
    dispatch({type: UPDATE_RECIPE})
    AxiosWithAuth()
    .put(`https://chefprtfolio.herokuapp.com/api/recipes/${id}`, recipe)
    .then(res => {
      AxiosWithAuth()
        .get(`https://chefprtfolio.herokuapp.com/api/recipes/${id}`)
        .then(res => {
          dispatch({type: UPDATE_RECIPE_SUCCESS, payload: res.data})
        })
    })
    .catch(err => {
        dispatch({type: UPDATE_RECIPE_FAILURE, payload: err})
    })
}