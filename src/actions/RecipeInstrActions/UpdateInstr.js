import AxiosWithAuth from "../../utils/AxiosWithAuth";

// PUT -- Update a specific recipe instruction, must included a change.

export const UPDATE_RECIPE_INSTR = "UPDATE_RECIPE_INSTR";
export const UPDATE_RECIPE_INSTR_SUCCESS = "UPDATE_RECIPE_INSTR_SUCCESS";
export const UPDATE_RECIPE_INSTR_FAILURE = "UPDATE_RECIPE_INSTR_FAILURE";

export const updateRecipeInstr = (id, instruction) => (dispatch) => {
  dispatch({ type: UPDATE_RECIPE_INSTR });
  AxiosWithAuth()
    .put(`/api/instructions/${id}`, instruction)
    .then((res) => {
      dispatch({ type: UPDATE_RECIPE_INSTR_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: UPDATE_RECIPE_INSTR_FAILURE, payload: error });
    });
};
