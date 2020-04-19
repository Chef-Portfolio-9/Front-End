import AxiosWithAuth from "../../utils/AxiosWithAuth";

// DELETE - Delete a recipe instruction

export const DELETE_RECIPE_INSTR = "DELETE_RECIPE_INSTR";
export const DELETE_RECIPE_INSTR_SUCCESS = "DELETE_RECIPE_INSTR_SUCCESS";
export const DELETE_RECIPE_INSTR_FAILURE = "DELETE_RECIPE_INSTR_FAILURE";

export const DeleteInst = (id) => (dispatch) => {
  dispatch({ type: DELETE_RECIPE_INSTR });
  AxiosWithAuth()
    .delete(`/api/instructions/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_RECIPE_INSTR_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: DELETE_RECIPE_INSTR_FAILURE, payload: error });
    });
};
