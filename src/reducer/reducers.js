// import {
//     POST_LOGIN_START,
//     POST_LOGIN_SUCCESS,
//     POST_LOGIN_FAILURE
// } from '../actions/EntryActions/LoginAction';
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
import{
    FETCH_SPECIFIC,
    FETCH_SPECIFIC_SUCCESS,
    FETCH_SPECIFIC_FAILURE
} from '../actions/RecipeActions/FetchSpecificRecipe'
import{
    UPDATE_RECIPE_START,
    UPDATE_RECIPE_SUCCESS,
    UPDATE_RECIPE_FAILURE
} from '../actions/RecipeActions/UpdateRecipe'
import {
    FETCH_CHEF_START,
    FETCH_CHEF_SUCCESS,
    FETCH_CHEF_FAILURE
} from '../actions/ChefActions/FetchChef'
import {
    FETCH_CHEF_RECIPE_START,
    FETCH_CHEF_RECIPE_SUCCESS,
    FETCH_CHEF_RECIPE_FAILURE
} from '../actions/ChefActions/GetChefRecipes';
import {
    UPDATE_CHEF_START,
    UPDATE_CHEF_SUCCESS,
    UPDATE_CHEF_FAILURE
} from '../actions/ChefActions/UpdateChef';
import {
    DELETE_CHEF_START,
    DELETE_CHEF_SUCCESS,
    DELETE_CHEF_FAILURE
} from '../actions/ChefActions/DeleteChef';

const initialState = {
    chefInfo: {
        username: '',
        password: '',
        full_name: '',
        location: '',
        restaurant: ''
    },
    chefRecipes: [],
    chefs: [],
    recipes: [],
    isLoading: false,
    error: null,  
    editing: false
};

const reducers = (state = initialState, action) => {
    console.log('reducer', action)
    switch (action.type) {
        // Login Reducer
        // case POST_LOGIN_START:
        //     return {
        //         ...state
        //     }
        // case POST_LOGIN_SUCCESS:
        //     return {
        //         ...state,
        //         error: ''
        //     }
        // case POST_LOGIN_FAILURE:
        //     return {
        //         ...state,
        //         error: action.payload
        //     }

// Register Reducer----------------------------------------------------
        
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
// Create Recipe Reducers -------------------------------------------------------

        case CREATE_RECIPE:
            return{
                ...state,
                isLoading: true,
                error: ''
            }
        case CREATE_RECIPE_SUCCESS:
            return{
                ...state,
                isLoading: false,
                chefs: action.payload
            }
        case CREATE_RECIPE_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
// Delete recipe reducers -------------------------------------------------------
        case DELETE_RECIPE:
            return{
                ...state,
                isLoading: true,
                error: ''
            }
        case DELETE_RECIPE_SUCCESS:
            return{
                ...state,
                isLoading: false,
                recipes: action.payload,
                error: ''
            }
        case DELETE_RECIPE_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
// Fetch recipes reducers ----------------------------------------------------
        
        case FETCH_RECIPES:
            return{
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_RECIPES_SUCCESS:
            return{
                ...state,
                isLoading: false,
                recipes: action.payload,
                error: ''
            }
        case FETCH_RECIPES_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
// Fetch specific recipes reducers ----------------------------------------------------
        
        case FETCH_SPECIFIC:
            return{
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_SPECIFIC_SUCCESS:
            return{
                ...state,
                isLoading: false,
                recipes: action.payload,
                error: ''
            }
        case FETCH_SPECIFIC_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
// update recipes reducers ------------------------------------------------------------------
        
        case UPDATE_RECIPE_START:
            return{
                ...state,
                isLoading: true,
                error: ''
            }
        case UPDATE_RECIPE_SUCCESS:
            return{
                ...state,
                isLoading: false,
                recipes: action.payload,
                error: ''
            }
        case UPDATE_RECIPE_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
// Fetch Chef Reducers --------------------------------------------------------------------------- 
        
        case FETCH_CHEF_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_CHEF_SUCCESS:
            return {
                ...state,
                isLoading: false,
                chefInfo: action.payload,
                error: ''
            }
        case FETCH_CHEF_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
// Fetch chef recipes reducers -------------------------------------------------------------------------------
        
        case FETCH_CHEF_RECIPE_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_CHEF_RECIPE_SUCCESS:
            return {
                ...state, 
                isLoading: false,
                chefRecipes: action.payload,
                error: ''
            }
        case FETCH_CHEF_RECIPE_FAILURE:
            return {
                ...state, 
                isLoading: false,
                error: action.payload
            }
// Update chefs reducers ----------------------------------------------------------------------------------
        
        case UPDATE_CHEF_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case UPDATE_CHEF_SUCCESS:
            return {
                ...state,
                isLoading: false,
                chefInfo: action.payload,
                error: ''
            }
        case UPDATE_CHEF_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
// Delete chefs reducers ----------------------------------------------------------------------------------------------
        
        case DELETE_CHEF_START:
            return {
                ...state,
                isLoading: true,
                error: '',
            }
        case DELETE_CHEF_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                chefs: action.payload,
                error: ''
            }
        case DELETE_CHEF_FAILURE: 
            return {
                ...state, 
                error: action.payload
            }
        default:
            return state;
    };
};

export default reducers;