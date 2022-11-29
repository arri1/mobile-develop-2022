import {createSlice, configureStore} from '@reduxjs/toolkit';

export const testSlice = createSlice({
  name: 'test',
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: state => {
      state.value += 1;
    },
    decremented: state => {
      state.value -= 1;
    },
  },
});

export const store = configureStore({
  reducer: {test: testSlice.reducer},
});
