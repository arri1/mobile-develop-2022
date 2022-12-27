import {createSlice} from '@reduxjs/toolkit';

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    login: 'admin',
    password: 'admin',
  },
  reducers: {
    setLogin: (state, login) => {
      state.login = login.payload;
    },
    setPassword: (state, password) => {
      state.password = password.payload;
    },
  },
});

export const {setLogin, setPassword} = accountSlice.actions;

export default accountSlice.reducer;
