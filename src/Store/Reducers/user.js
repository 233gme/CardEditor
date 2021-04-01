import { createSlice } from '@reduxjs/toolkit'

export const user = createSlice({
  name: 'user',
  initialState: {
    user: {},
    isAdmin: false,
  },
  reducers: {
    logIn: (state, action) => {
      if (action.payload.username === 'testAdmin@gmail.com' && action.payload.password === '12345yuiopp') {
        state.isAdmin = true;
      }
      state.user = action.payload;

      localStorage.setItem('username', action.payload.username);
      localStorage.setItem('password', action.payload.password);
      localStorage.setItem('isAdmin', state.isAdmin);
    },
    logOut: state => {
      state.user = {};
      state.isAdmin = false;

      localStorage.removeItem('username');
      localStorage.removeItem('password');
      localStorage.removeItem('isAdmin');
    },
    setData: state => {
      state.user.username = localStorage.getItem('username');
      state.user.password = localStorage.getItem('password');
      state.isAdmin = localStorage.getItem('isAdmin') === 'true' ? true : false;
    }
  }
})

export const { logIn, logOut, setData } = user.actions
export default user.reducer