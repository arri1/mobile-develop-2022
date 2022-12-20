import {configureStore} from '@reduxjs/toolkit';
import {counterSlice} from './CounterSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
