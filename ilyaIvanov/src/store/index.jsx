import {createSlice, configureStore} from '@reduxjs/toolkit';

export const testSlice = createSlice({
  name: 'test',
  initialState: {
    value: 0,
    valueDirection: 0,
  },
  reducers: {
    setValueDirection: (state, {payload}) => {
      state.valueDirection = payload;
    },
  },
});

const store = configureStore({
    reducer:{
        test: testSlice.reducer,
    }
});
export default store;
