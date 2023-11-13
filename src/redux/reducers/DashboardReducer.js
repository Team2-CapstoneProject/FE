import {
  FETCH_DASHBOARD_DATA_REQUEST,
  FETCH_DASHBOARD_DATA_SUCCESS,
  FETCH_DASHBOARD_DATA_FAILURE,
  FETCH_VILLAS_REQUEST,
  FETCH_VILLAS_SUCCESS,
  FETCH_VILLAS_FAILURE,
  ADD_VILLA_SUCCESS,
  ADD_VILLA_FAILURE,
  EDIT_VILLA_SUCCESS,
  EDIT_VILLA_FAILURE,
  DELETE_VILLA_SUCCESS,
  DELETE_VILLA_FAILURE,
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
        error: null,
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

    case ADD_VILLA_SUCCESS:
      return {
        ...state,
        villas: [...state.villas, action.payload],
        loading: false,
        error: null,
      };

    case EDIT_VILLA_SUCCESS:
      const updatedVilla = action.payload;
      const updatedVillas = state.villas.map((villa) =>
        villa.id === updatedVilla.id ? updatedVilla : villa
      );

      return {
        ...state,
        villas: updatedVillas,
        loading: false,
        error: null,
      };

    case DELETE_VILLA_SUCCESS:
      return {
        ...state,
        deleting: false,
        success: true,
        error: null,
      };

    case FETCH_DASHBOARD_DATA_FAILURE:
    case FETCH_VILLAS_FAILURE:
    case ADD_VILLA_FAILURE:
    case EDIT_VILLA_FAILURE:
    case DELETE_VILLA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default dashboardReducer;
