import AxiosWithAuth from './AxiosWithAuth';

// RECIPES ACTIONS...

// GET /recipes  <--- returns a list of all the recipes

export const FETCH_RECIPES_START = 'FETCH_START';
export const FETCH_RECIPES_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_RECIPES_FAILURE = 'FETCH_FAILURE';

// GET /recipes/:id  <--- returns a specific recipe

export const FETCH_SPECIFIC_START = 'FETCH_SPECIFIC_START';
export const FETCH_SPECIFIC_SUCCESS = 'FETCH_SPECIFIC_SUCCESS';
export const FETCH_SPECIFIC_FAILURE = 'FETCH_SPECIFIC_FAILURE';

// GET /recipes/:id/instructions  <--- returns a list of instructions for recipe

export const FETCH_INSTRUCT_START = 'FETCH_INSTRUCT_START';
export const FETCH_INSTRUCT_SUCCESS = 'FETCH_INSTRUCT_SUCCESS';
export const FETCH_INSTRUCT_FAILURE = 'FETCH_INSTRUCT_FAILURE';

// POST /recipes  <---- creates a recipe, MUST INCLUDE (recipe_name & chef_id)

export const CREATE_RECIPE_START = 'CREATE_RECIPE_START';
export const CREATE_RECIPE_SUCCESS = 'CREATE_RECIPE_SUCCESS';
export const CREATE_RECIPE_FAILURE = 'CREATE_RECIPE_FAILURE';

// PUT /recipes/:id <---- updates a specific recipe, must contain a change.

export const UPDATE_RECIPE_START = 'UPDATE_RECIPE_START';
export const UPDATE_RECIPE_SUCCESS = 'UPDATE_RECIPE_SUCCESS';
export const UPDATE_RECIPE_FAILURE = 'UPDATE_RECIPE_FAILURE';

// DELETE /recipes/:id <---- Deletes a specific recipe

export const DELETE_RECIPE_START = 'DELETE_RECIPE_START';
export const DELETE_RECIPE_SUCCESS = 'DELETE_RECIPE_SUCCESS';
export const DELETE_RECIPE_FAILURE = 'DELETE_RECIPE_FAILURE';

// INGREDIENTS ACTIONS....

// GET /ingredients <--- returns a list of all the ingredients

export const FETCH_INGREDIENTS_START = 'FETCH_INGREDIENTS_START';
export const FETCH_INGREDIENTS_SUCCESS = 'FETCH_INGREDIENTS_SUCCESS';
export const FETCH_INGREDIENTS_FAILURE = 'FETCH_INGREDIENTS_FAILURE';

// GET /ingredients/:id <--- returns a specific ingredient

export const FETCH_SPECIFIC_ING_START = 'FETCH_SPECIFIC_ING_START';
export const FETCH_SPECIFIC_ING_SUCCESS = 'FETCH_SPECIFIC_ING_SUCCESS';
export const FETCH_SPECIFIC_ING_FAILURE = 'FETCH_SPECIFIC_ING_FAILURE';

// POST /ingredients <--- creates an ingredient. Must include (ingredient_name)

export const CREATE_ING_START = 'CREATE_ING_START';
export const CREATE_ING_SUCCESS = 'CREATE_ING_SUCCESS';
export const CREATE_ING_FAILURE = 'CREATE_ING_FAILURE';

// PUT /ingredients/:id <--- updates a specific ingredient, must contain a change

export const UPDATE_ING_START = 'UPDATE_ING_START';
export const UPDATE_ING_SUCCESS = 'UPDATE_ING_SUCCESS';
export const UPDATE_ING_FAILURE = 'UPDATE_ING_FAILURE';

// DELETE /ingredients/:id <--- deletes a specific ingredient

export const DELETE_ING_START = 'DELETE_ING_START';
export const DELETE_ING_SUCCESS = 'DELETE_ING_SUCCESS';
export const DELETE_ING_FAILURE = 'DELETE_ING_FAILURE';

// INSTRUCTIONS ACTIONS...

// GET /instructions 

export const FETCH_INSTRUCTION_START = 'FETCH_INSTRUCTION_START';
export const FETCH_INSTRUCTION_SUCCESS = 'FETCH_INSTRUCTION_SUCCESS';
export const FETCH_INSTRUCTION_FAILURE = 'FETCH_INSTRUCTION_FAILURE';

// GET /instructions/:id <--- returns a specific instruction

export const FETCH_SPECIFIC_INSTR_START = 'FETCH_INSTR_START';
export const FETCH_SPECIFIC_INSTR_SUCCESS = 'FETCH_INSTR_SUCCESS';
export const FETCH_SPECIFIC_INSTR_FAILURE = 'FETCH_INSTR_FAILURE';

// POST /instructions <--- creates an instruction, must include (recipe_id, step_number, instruction)

export const CREATE_INSTR_START = 'CREATE_INSTR_START';
export const CREATE_INSTR_SUCCESS = 'CREATE_INSTR_SUCCESS';
export const CREATE_INSTR_FAILURE = 'CREATE_INSTR_FAILURE';

// PUT /instructions/:id <--- updates a specific instruction, must contain a change

export const UPDATE_INSTR_START = 'UPDATE_INSTR_START';
export const UPDATE_INSTR_SUCCESS = 'UPDATE_INSTR_SUCCESS';
export const UPDATE_INSTR_FAILURE = 'UPDATE_INSTR_FAILURE';

// DELETE /instructions/:id <--- deletes a specific instruction

export const DELETE_INSTR_START = 'DELETE_INSTR_START';
export const DELETE_INSTR_SUCCESS = 'DELETE_INSTR_SUCCESS';
export const DELETE_INSTR_FAILURE = 'DELETE_INSTR_FAILURE';

// ** ACTION CREATOR FUNCTIONS ** //

// RECIPE ACTION FUNCTIONS

export const fetchRecipes = () => dispatch => {
    dispatch({ type: FETCH_RECIPES_START });

    AxiosWithAuth()
    .get('/recipes')
    .then(res => dispatch({ type: FETCH_RECIPES_SUCCESS, payload: res.data}))
    .catch(error => dispatch({ type: FETCH_RECIPES_FAILURE, payload: error}))
};

export const fetchSpecificRecipe = () => dispatch => {
    dispatch({ type: FETCH_SPECIFIC_START})

    AxiosWithAuth()
    .get('/recipes/:id')
    .then(res => dispatch({ type: FETCH_SPECIFIC_SUCCESS, payload: res.data}))
    .catch(error => dispatch({ type: FETCH_SPECIFIC_FAILURE, payload: error}))
};
















 



