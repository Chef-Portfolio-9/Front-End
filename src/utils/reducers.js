import {
    POST_REGISTER_START,
    POST_REGISTER_SUCCESS, 
    POST_REGISTER_FAILURE                  
} from './EntryActions/RegisterAction';



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