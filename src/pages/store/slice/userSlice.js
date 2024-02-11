import { createSlice } from "@reduxjs/toolkit";
import fetchAllUsers from "../Reducers/userReducer";

const initialState = {
  users: [],
  isLoading: false,
  errorUsers: '',
  UserListsStatus: 'pending',

};
const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) =>{
      builder.addCase(fetchAllUsers.pending, (state) =>{
          state.isLoading = true;
          state.errorUsers = '';
          state.users = [];
      });
      builder.addCase(fetchAllUsers.fulfilled, (state, action) =>{
          state.isLoading = false;
          state.errorUsers = '';
          state.users = action.payload;
      });
      builder.addCase(fetchAllUsers.rejected, (state, action) =>{
          state.isLoading = false;
          state.errorUsers = action.payload;
          state.users = [];
      })
  }
});

const userReducer = usersSlice.reducer;

export const { setUsers, setLoading, setError } = usersSlice.actions;
export default userReducer;