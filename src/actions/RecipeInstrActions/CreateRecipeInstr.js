import AxiosWithAuth from "../../utils/AxiosWithAuth";

// POST - Create a recipe instruction, must included == recipe_id, step_number, the instruction itself.

export const CREATE_RECIPE_INSTR = "CREATE_RECIPE_INSTR";
export const CREATE_RECIPE_INSTR_SUCCESS = "CREATE_RECIPE_iNSTR_SUCCESS";
export const CREATE_RECIPE_INSTR_FAILURE = "CREATE_RECIPE_INSTR_FAILURE";

export const createInstruction = (instruction) => (dispatch) => {
  dispatch({ type: CREATE_RECIPE_INSTR });
  AxiosWithAuth()
    .post("/api/instructions/", instruction)
    .then((res) => {
      dispatch({ type: CREATE_RECIPE_INSTR_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: CREATE_RECIPE_INSTR_FAILURE, payload: error });
    });
};
