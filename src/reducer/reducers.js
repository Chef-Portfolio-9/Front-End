import {
    POST_REGISTER_START,
    POST_REGISTER_SUCCESS, 
    POST_REGISTER_FAILURE                  
} from '../actions/EntryActions/RegisterAction';
import
{   CREATE_RECIPE,
    CREATE_RECIPE_SUCCESS,
    CREATE_RECIPE_FAILURE
} from '../actions/RecipeActions/CreateRecipe';


const initialState = {
    chefInfo: [],
    chefs: [],
    recipes: [],
    isLoading: false,
    error: null     
};

const reducers = (state = initialState, action) => {
    console.log('reducer', action)
    switch (action.type) {
        case POST_REGISTER_START:
            return {
                ...state, 
                isLoading: true,
                error: ''
            }
        case POST_REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                chefInfo: action.payload,
                error: ''
            }
        case POST_REGISTER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: ''
            }
        case CREATE_RECIPE:
            return{
                ...state,
            }
        case CREATE_RECIPE_SUCCESS:
            return{
                ...state,
                recipes: action.payload
            }
        case CREATE_RECIPE_FAILURE:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state;
    };
};

export default reducers;