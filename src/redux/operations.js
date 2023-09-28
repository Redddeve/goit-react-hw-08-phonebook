import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { addContact,deleteContact } from './contactsSlice';

axios.defaults.baseURL = 'https://6513d27f8e505cebc2ea3434.mockapi.io/';

// export const getContacts = async () => {
//   const res = await axios.get('/contacts');
// };
// export const addContactThunk = async () => {
//   const res = await axios.get('/contacts');
// };
// export const deleteContactThunk = async () => {
//   const res = await axios.get('/contacts');
// };

export const fetchContacts = createAsyncThunk(
  'fetchContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('contacts');
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'addContact',
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post('contacts', body);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'deleteContact',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`contacts/${id}`);
      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
