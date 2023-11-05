import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../src/reducers/AuthReducer';

const store = configureStore({
  reducer: {
    auth: authReducer
  }
})

export default store;