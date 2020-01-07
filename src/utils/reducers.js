import {
    FETCH_RECIPES_START, FETCH_RECIPES_SUCCESS, FETCH_RECIPES_FAILURE, 
    FETCH_SPECIFIC_START, FETCH_SPECIFIC_SUCCESS, FETCH_SPECIFIC_FAILURE,
    FETCH_INSTRUCT_START, FETCH_INSTRUCT_SUCCESS, FETCH_INSTRUCT_FAILURE,
    CREATE_RECIPE_START, CREATE_RECIPE_SUCCESS, CREATE_RECIPE_FAILURE,
    UPDATE_RECIPE_START, UPDATE_RECIPE_SUCCESS, UPDATE_RECIPE_FAILURE,
    DELETE_RECIPE_START, DELETE_RECIPE_SUCCESS, DELETE_RECIPE_FAILURE,
    FETCH_INGREDIENTS_START, FETCH_INGREDIENTS_SUCCESS, FETCH_INGREDIENTS_FAILURE,
    FETCH_SPECIFIC_ING_START, FETCH_SPECIFIC_ING_SUCCESS, FETCH_SPECIFIC_ING_FAILURE,
    CREATE_ING_START, CREATE_ING_SUCCESS, CREATE_ING_FAILURE, UPDATE_ING_START,
    UPDATE_ING_SUCCESS, UPDATE_ING_FAILURE, DELETE_ING_START, DELETE_ING_SUCCESS,
    DELETE_ING_FAILURE, FETCH_INSTRUCTION_START, FETCH_INSTRUCTION_SUCCESS, FETCH_INSTRUCTION_FAILURE,
    FETCH_SPECIFIC_INSTR_START, FETCH_SPECIFIC_INSTR_SUCCESS, FETCH_SPECIFIC_INSTR_FAILURE,
    CREATE_INSTR_START, CREATE_INSTR_SUCCESS, CREATE_INSTR_FAILURE, UPDATE_INSTR_START, UPDATE_INSTR_SUCCESS,
    UPDATE_INSTR_FAILURE, DELETE_INSTR_START, DELETE_INSTR_SUCCESS, DELETE_INSTR_FAILURE, POST_REGISTER_START,
    POST_REGISTER_SUCCESS, POST_REGISTER_FAILURE                  
} from './actions';

const initialState = {
    chefInfo: [],
    chefs: [],
    recipes: [],
    isLoading: false,
    error: null     
};

const reducers = (state = initialState, action) => {
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
        default:
            return state;
    };
};

export default reducers;