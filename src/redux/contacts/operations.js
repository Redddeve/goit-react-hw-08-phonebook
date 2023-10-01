import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

//* ========================= Contacts =========================

export const fetchContacts = createAsyncThunk(
  'fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('contacts');
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'addContact',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('contacts', body);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`contacts/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'updateContact',
  async (body, { rejectWithValue }) => {
    try {
      console.log(body);
      const { data } = await axios.patch(`contacts/${body.id}`, body);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
