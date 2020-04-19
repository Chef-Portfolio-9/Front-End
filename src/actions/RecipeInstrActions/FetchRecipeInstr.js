import AxiosWithAuth from "../../utils/AxiosWithAuth";

// Get Recipe instructions <--- Should return a list of instructions pertaining to a specific ingredient

export const FETCH_INSTRUCTIONS = "FETCH_INSTR_START";
export const FETCH_INSTRUCTIONS_SUCCESS = "FETCH_INSTR_SUCCESS";
export const FETCH_INSTRUCTIONS_FAILURE = "FETCH_INSTR_FAILURE";

export const getInstructions = () => (dispatch) => {
  dispatch({ type: FETCH_INSTRUCTIONS });
  AxiosWithAuth()
    .get("/api/instructions")
    .then((res) => {
      dispatch({ type: FETCH_INSTRUCTIONS_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: FETCH_INSTRUCTIONS_FAILURE, payload: error });
    });
};
