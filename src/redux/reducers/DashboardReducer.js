import {
  FETCH_DASHBOARD_DATA_REQUEST,
  FETCH_DASHBOARD_DATA_SUCCESS,
  FETCH_DASHBOARD_DATA_FAILURE,
  FETCH_VILLAS_REQUEST,
  FETCH_VILLAS_SUCCESS,
  FETCH_VILLAS_FAILURE,
  ADD_VILLA,
  ADD_VILLA_SUCCESS,
  ADD_VILLA_FAILURE,
  EDIT_VILLA,
  DELETE_VILLA,
  DELETE_VILLA_SUCCESS, DELETE_VILLA_FAILURE,
} from '../actions/DashboardActions';

const initialState = {
  villas: [],
  deleting: false,
  success: false,
  data: null,
  loading: false,
  error: null,
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DASHBOARD_DATA_REQUEST:
    case FETCH_VILLAS_REQUEST:
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

    case FETCH_VILLAS_SUCCESS:
      return {
        ...state,
        loading: false,
        villas: action.payload,
        error: null,
      };

    case FETCH_DASHBOARD_DATA_FAILURE:
    case FETCH_VILLAS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_VILLA:
      return {
        ...state,
        loading: true,
        error: null
      };

    case ADD_VILLA_SUCCESS:
      return {
        ...state,
        villas: [...state.villas, action.payload],
        loading: false,
        error: null,
      };

    case ADD_VILLA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case EDIT_VILLA:
      return {
        ...state,
        villas: state.villas.map((villa) =>
          villa.id === action.payload.id ? action.payload : villa
        ),
      };

    case DELETE_VILLA:
      return {
        ...state,
        deleting: true,
        success: false,
        error: null,
      };
    case DELETE_VILLA_SUCCESS:
      return {
        ...state,
        deleting: false,
        success: true,
        error: null,
      };
    case DELETE_VILLA_FAILURE:
      return {
        ...state,
        deleting: false,
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default dashboardReducer;
