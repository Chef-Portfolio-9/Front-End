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
    UPDATE_RECIPE,
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
    chefRecipes: {
        recipe_name: '',
        meal_type: ''       
    },
    chefs: [],
    recipes: [],
    isLoading: false,
    error: null     
};

const reducers = (state = initialState, action) => {
    console.log('reducer', action)
    switch (action.type) {
            // Register Reducer
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
            // Recipe Reducers
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
        case FETCH_SPECIFIC:
            return{
                ...state
            }
        case FETCH_SPECIFIC_SUCCESS:
            return{
                ...state,
                recipes: action.payload
            }
        case FETCH_SPECIFIC_FAILURE:
            return{
                ...state,
                error: action.payload
            }
        case UPDATE_RECIPE:
            return{
                ...state
            }
        case UPDATE_RECIPE_SUCCESS:
            return{
                ...state,
                recipes: action.payload
            }
        case UPDATE_RECIPE_FAILURE:
            return{
                ...state,
                error: action.payload
            }
            // Chef Reducers 
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
                error: action.payload
            }
        case FETCH_CHEF_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
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
                error: action.payload
            }
        case FETCH_CHEF_RECIPE_FAILURE:
            return {
                ...state, 
                isLoading: false,
                error: action.payload
            }
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
                error: action.payload
            }
        case UPDATE_CHEF_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
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