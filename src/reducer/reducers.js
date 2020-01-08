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
import {
    DELETE_RECIPE,
    DELETE_RECIPE_SUCCESS,
    DELETE_RECIPE_FAILURE
} from '../actions/RecipeActions/DeleteRecipe';
import {
    FETCH_RECIPES,
    FETCH_RECIPES_SUCCESS,
    FETCH_RECIPES_FAILURE
} from '../actions/RecipeActions/FetchRecipe';
import { 
    FETCH_CHEF_START, 
    FETCH_CHEF_SUCCESS,
    FETCH_CHEF_FAILURE
 } from '../actions/ChefActions/FetchChef';

const initialState = {
    chefInfo: {
        username: '',
        password: '',
        full_name: '',
        location: '',
        restaurant: '',
    },
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
        case DELETE_RECIPE:
            return{
                ...state
            }
        case DELETE_RECIPE_SUCCESS:
            return{
                ...state,
                recipes: action.payload
            }
        case DELETE_RECIPE_FAILURE:
            return{
                ...state,
                error: action.payload
            }
        case FETCH_RECIPES:
            return{
                ...state
            }
        case FETCH_RECIPES_SUCCESS:
            return{
                ...state,
                recipes: action.payload
            }
        case FETCH_RECIPES_FAILURE:
            return{
                ...state,
                error: action.payload
            }
        case FETCH_CHEF_START:
            return {
                ...state,
                error: action.payload,
                isLoading: true
            }
        case FETCH_CHEF_SUCCESS:
            return {
                ...state,
                chefInfo: action.payload,
                error: action.payload
            }
        case FETCH_CHEF_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    };
};

export default reducers;