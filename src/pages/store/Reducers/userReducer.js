import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../../Api/Api';

const fetchAllUsers = createAsyncThunk('users/fetchall', async (payload, thunkApi) => {
  try {
    const response = await api.getUsers(); // Дожидаемся завершения запроса
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export default fetchAllUsers;
