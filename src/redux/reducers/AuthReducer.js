import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/AuthActions';

const initialState = {
  user: null,
  token: null,
  error: null,
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        user: null,
        token: null,
        error: null,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        error: null,
        isLoggedIn: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload,
        isLoggedIn: false,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
