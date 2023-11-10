import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../src/redux/reducers/AuthReducer';
import dashboardReducer from './redux/reducers/DashboardReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer
  }
})

export default store;