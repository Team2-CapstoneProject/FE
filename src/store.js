import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../src/redux/reducers/AuthReducer';

const store = configureStore({
  reducer: {
    auth: authReducer
  }
})

export default store;