import axios from 'axios';

export const FETCH_DASHBOARD_DATA_REQUEST = 'FETCH_DASHBOARD_DATA_REQUEST';
export const FETCH_DASHBOARD_DATA_SUCCESS = 'FETCH_DASHBOARD_DATA_SUCCESS';
export const FETCH_DASHBOARD_DATA_FAILURE = 'FETCH_DASHBOARD_DATA_FAILURE';


export const fetchDashboardDataRequest = () => ({
  type: FETCH_DASHBOARD_DATA_REQUEST,
});

export const fetchDashboardDataSuccess = (data) => ({
  type: FETCH_DASHBOARD_DATA_SUCCESS,
  payload: data,
});

export const fetchDashboardDataFailure = (error) => ({
  type: FETCH_DASHBOARD_DATA_FAILURE,
  payload: error,
});


export const fetchDashboardData = () => {
  return async (dispatch) => {
    dispatch(fetchDashboardDataRequest());

    try {
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error('Token not found');
      }

      const response = await axios.get('/api/dashboard', {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      const data = response.data;
      dispatch(fetchDashboardDataSuccess(data));
    } catch (error) {
      dispatch(fetchDashboardDataFailure(error.message));
    }
  };
};
