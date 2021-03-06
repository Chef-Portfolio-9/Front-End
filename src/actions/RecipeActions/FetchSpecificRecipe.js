import AxiosWithAuth from "../../utils/AxiosWithAuth";

// GET /recipes/:id  <--- returns a specific recipe

export const FETCH_SPECIFIC = "FETCH_SPECIFIC";
export const FETCH_SPECIFIC_SUCCESS = "FETCH_SPECIFIC_SUCCESS";
export const FETCH_SPECIFIC_FAILURE = "FETCH_SPECIFIC_FAILURE";

export const fetchSpecificRecipe = (id) => (dispatch) => {
  dispatch({ type: FETCH_SPECIFIC });
  AxiosWithAuth()
    .get(`https://chefprtfolio.herokuapp.com/api/recipes/${id}`)
    .then((res) => {
      dispatch({ type: FETCH_SPECIFIC_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_SPECIFIC_FAILURE, payload: err });
    });
};
