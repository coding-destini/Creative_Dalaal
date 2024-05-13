import { createSlice } from "@reduxjs/toolkit";
import toast from 'react-hot-toast'

const initialState = {
  loggedInUser: null,
  users: [],
  loading: false,
  error: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Set logged-in user
    setLogin(state, action) {
      state.loggedInUser = action.payload;
    },
    // Clear logged-in user
    clearLogIn(state) {
      console.log(state.loggedInUser);
      state.loggedInUser = null;
      console.log(state.loggedInUser);
    },
    // User's actions 
    addUser(state, action) {
      const newUser = {
        id: state.users.length + 1,
        ...action.payload
      };
      state.users.push(newUser);
      // Save updated state to localStorage
      localStorage.setItem('users', JSON.stringify(state.users));
      toast.success("User Added Successfully")
    },
    // Getting user list status while fetching
    getUsersRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getUsersSuccess(state, action) {
      state.loading = false;
      state.users = action.payload;
    },
    getUsersFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  }
});

export const { setLogin, clearLogIn, addUser, getUsersRequest, getUsersSuccess, getUsersFailure, getUser } = userSlice.actions;
export default userSlice.reducer;
