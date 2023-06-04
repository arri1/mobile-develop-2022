import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import burgerReducer from './src/redux/burgerReducer';
import {counterSlice} from './src/redux/CounterSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
