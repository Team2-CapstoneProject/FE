import axios from 'axios';
import Swal from 'sweetalert2';

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


export const FETCH_VILLAS_REQUEST = 'FETCH_VILLAS_REQUEST';
export const FETCH_VILLAS_SUCCESS = 'FETCH_VILLAS_SUCCESS';
export const FETCH_VILLAS_FAILURE = 'FETCH_VILLAS_FAILURE';

export const fetchVillasRequest = () => ({
  type: FETCH_VILLAS_REQUEST,
});

export const fetchVillasSuccess = (villas) => ({
  type: FETCH_VILLAS_SUCCESS,
  payload: villas,
});

export const fetchVillasFailure = (error) => ({
  type: FETCH_VILLAS_FAILURE,
  payload: error,
});

export const fetchVillas = () => {
  return async (dispatch) => {
    dispatch(fetchVillasRequest());

    try {
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error('Token not found');
      }

      const response = await axios.get('/api/dashboard/vila', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const villas = response.data.vilas;
      dispatch(fetchVillasSuccess(villas));
    } catch (error) {
      dispatch(fetchVillasFailure(error.message));
    }
  };
};




export const ADD_VILLA = 'ADD_VILLA';
export const EDIT_VILLA = 'EDIT_VILLA';
export const DELETE_VILLA = 'DELETE_VILLA';
export const DELETE_VILLA_SUCCESS = 'DELETE_VILLA_SUCCESS';
export const DELETE_VILLA_FAILURE = 'DELETE_VILLA_FAILURE';
export const ADD_VILLA_SUCCESS = 'ADD_VILLA_SUCCESS';
export const ADD_VILLA_FAILURE = 'ADD_VILLA_FAILURE';


export const editVilla = (villa) => ({
  type: EDIT_VILLA,
  payload: villa,
});

export const deleteVilla = (villaId) => ({
  type: DELETE_VILLA,
  payload: villaId,
});
const deleteVillaSuccess = (villas) => ({
  type: DELETE_VILLA_SUCCESS,
  payload: villas,
});

const deleteVillaFailure = (error) => ({
  type: DELETE_VILLA_FAILURE,
  payload: error,
});

export const deleteVillaAction = (vilaId) => async (dispatch) => {
  dispatch(deleteVilla());
  try {
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Token not found');
    }

    const formData = new URLSearchParams();
    formData.append('vilaId', vilaId);

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post('/api/dashboard/deletevila', formData, config);

    const { data } = response;

    if (data && data.message === 'successfully deleted a vila.') {
      Swal.fire({
        icon: 'success',
        title: 'Villa Deleted',
        text: 'Villa has been successfully deleted.',
      }).then(() => {
        window.location.reload();
      });

      const updatedVillas = await fetchVillas();
      dispatch(deleteVillaSuccess(updatedVillas));
    } else {
      throw new Error('Invalid response format. Vila deletion failed.');
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Villa Deletion Failed',
      text: 'Failed to delete the villa. Please try again.',
    }).then(() => {
      window.location.reload();
    });

    dispatch(deleteVillaFailure(error.message));
  }
};

export const addVilla = (villa) => ({
  type: ADD_VILLA,
  payload: villa,
});

const addVillaSuccess = (villas) => ({
  type: ADD_VILLA_SUCCESS,
  payload: villas,
});

const addVillaFailure = (error) => ({
  type: ADD_VILLA_FAILURE,
  payload: error,
});

export const addVillaAction = (villaData) => async (dispatch) => {
  dispatch(addVilla());

  try {
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Token not found');
    }

    const formData = new FormData();

    formData.append('name', villaData.name);
    formData.append('price', villaData.price);
    formData.append('description', villaData.description);
    formData.append('location', villaData.location);

    const imageUrlsArray = villaData.imageUrls.split(',').map(url => url.trim());
    formData.append('images', JSON.stringify(imageUrlsArray));


    formData.append('facilities', JSON.stringify(villaData.facilities));
    formData.append('longitude', villaData.longitude || '');
    formData.append('latitude', villaData.latitude || '');

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post('/api/dashboard/createvila', formData, config);

    const { data } = response;

    if (data && data.message === 'successfully added a new vila.') {
      Swal.fire({
        icon: 'success',
        title: 'Villa Added',
        text: 'A new villa has been successfully added.',
      }).then(() => {
        window.location.reload();
      });

      const updatedVillas = await dispatch(fetchVillas());
      dispatch(addVillaSuccess(updatedVillas));
    } else {
      throw new Error('Invalid response format. Vila addition failed.');
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Villa Addition Failed',
      text: 'Failed to add the new villa. Please try again.',
    });

    dispatch(addVillaFailure(error.message));
  }
};


export const editVillaAction = (villaId) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Token not found');
    }

    const response = await axios.post(`/api/dashboard/editvila/${villaId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: EDIT_VILLA,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error editing villa:', error);
  }
};

