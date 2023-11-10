import Swal from 'sweetalert2';
import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user, token) => ({
  type: LOGIN_SUCCESS,
  payload: { user, token },
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});

export const loginUser = (credentials, navigate) => {
  return async (dispatch) => {
    dispatch(loginRequest());

    try {
      const response = await axios.post('/api/auth/login', credentials);

      dispatch(loginSuccess(response.data.user, response.data.token));
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');

      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'You have successfully logged in!',
      });
    } catch (error) {

      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Incorrect username or password. Please try again.',
      });

      dispatch(loginFailure(error.response ? error.response.data.error : 'An error occurred'));
    }
  };
};


export const logoutUser = (navigate) => {
  return async (dispatch) => {
    try {
      dispatch(logoutUser())
        .then(() => {
          navigate("/login");
        })
        .catch((error) => {
          console.error("Logout error:", error);
        });
    } catch (error) {
      console.error("Logout error:", error);
    }
  }

}