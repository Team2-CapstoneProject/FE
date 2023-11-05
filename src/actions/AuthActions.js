import axios from 'axios';
import Swal from 'sweetalert2';

export const loginSuccess = (user, token) => (dispatch) => {
  dispatch({
    type: 'LOGIN_SUCCESS',
    payload: { user, token },
  });
};

export const loginFailure = (error) => ({
  type: 'LOGIN_FAILURE',
  payload: error,
});

export const loginUser = (credentials, navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        'http://localhost:3001/api/auth/login',
        credentials
      );

      dispatch(loginSuccess(response.data.user, response.data.token));
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'You have successfully logged in!',
      });
    } catch (error) {
      // console.error('Login Error:', error);
      dispatch(loginFailure(error.response ? error.response.data.error : 'An error occurred'));

      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: error.response ? error.response.data.error : 'An error occurred',
      });
    }
  };
};

export const logoutUser = () => (dispatch) => {
  dispatch({ type: 'LOGOUT' });
};
