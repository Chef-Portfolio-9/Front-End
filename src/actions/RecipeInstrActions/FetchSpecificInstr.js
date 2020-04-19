import AxiosWithAuth from "../../utils/AxiosWithAuth";

// Get -- Return a specific recipe instruction

export const FETCH_SPECIFIC_INSTR = "FETCH_SPECIFIC_INSTR";
export const FETCH_SPECIFIC_INSTR_SUCCESS = "FETCH_SPECIFIC_INSTR_SUCCESS";
export const FETCH_SPECIFIC_INSTR_FAILURE = "FETCH_SPECIFIC_INSTR_FAILURE";

export const fetchInstr = (id) => (dispatch) => {
  dispatch({ type: FETCH_SPECIFIC_INSTR });
  AxiosWithAuth()
    .get(`/api/instructions/${id}`)
    .then((res) => {
      dispatch({ type: FETCH_SPECIFIC_INSTR_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: FETCH_SPECIFIC_INSTR_FAILURE, payload: error });
    });
};
