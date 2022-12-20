/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
