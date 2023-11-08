import {
  FETCH_DASHBOARD_DATA_REQUEST,
  FETCH_DASHBOARD_DATA_SUCCESS,
  FETCH_DASHBOARD_DATA_FAILURE,
} from '../actions/DashboardActions';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DASHBOARD_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DASHBOARD_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case FETCH_DASHBOARD_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
