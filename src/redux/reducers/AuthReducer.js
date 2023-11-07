const initialState = {
  user: null,
  token: null,
  error: null,
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        error: null,
        isLoggedIn: true,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        user: null,
        error: action.payload,
        isLoggedIn: false,
      };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
