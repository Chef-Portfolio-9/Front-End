import AxiosWithAuth from '../AxiosWithAuth';

export const POST_REGISTER_START = 'POST_REGISTER_START';
export const POST_REGISTER_SUCCESS = 'POST_REGISTER_SUCCESS';
export const POST_REGISTER_FAILURE = 'POST_REGISTER_FAILURE';

export const register = info => dispatch => {
    dispatch({ type: POST_REGISTER_START})
    console.log(info);
    AxiosWithAuth()
    .post('/api/auth/chefs/register', info)
    .then(res => { dispatch({ type: POST_REGISTER_SUCCESS, payload: res.data})
    // localStorage.setItem('token', res.data.token)
    console.log('this is the response', res.data)
    })
    .catch(error => { dispatch({ type: POST_REGISTER_FAILURE, payload: error.res})
    })
};