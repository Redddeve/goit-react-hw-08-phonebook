import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

//* ========================= Users =========================

function setToken(token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

function clearToken() {
  axios.defaults.headers.common['Authorization'] = ``;
}

export const registerUser = createAsyncThunk(
  'createUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('users/signup', credentials);
      setToken(data.token);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  'logInUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('users/login', credentials);
      setToken(data.token);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'logOutUser',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('users/logout');
      clearToken();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'refreshThunk',
  async (_, { rejectWithValue, getState }) => {
    const savedToken = getState().auth.token;
    if (!savedToken) return rejectWithValue('Token does not exist');
    try {
      setToken(savedToken);
      const { data } = await axios.get('users/current');
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
