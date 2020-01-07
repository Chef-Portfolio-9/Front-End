import AxiosWithAuth from '../../utils/AxiosWithAuth';

// POST /recipes  <---- creates a recipe, MUST INCLUDE (recipe_name & chef_id)

export const CREATE_RECIPE = 'CREATE_RECIPE';
export const CREATE_RECIPE_SUCCESS = 'CREATE_RECIPE_SUCCESS';
export const CREATE_RECIPE_FAILURE = 'CREATE_RECIPE_FAILURE';

// ** ACTION CREATOR FUNCTION ** //

export const createRecipe= recipe=> dispatch=>{
    dispatch({type: CREATE_RECIPE})
    AxiosWithAuth()
        .post(`https://chefprtfolio.herokuapp.com/api/recipes/`, recipe)
        .then(res => {
            console.log('createRecipe post',res)
            dispatch({ type: CREATE_RECIPE_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: CREATE_RECIPE_FAILURE, payload: err });
        })
}