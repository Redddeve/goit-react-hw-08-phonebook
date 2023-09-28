import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    updateFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items.push(...action.payload);
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          cont => cont.id !== action.payload
        );
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          addContact.fulfilled,
          deleteContact.fulfilled
        ),
        (state, action) => {
          state.contacts.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        (state, action) => {
          state.contacts.isLoading = true;
          state.contacts.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        (state, action) => {
          state.contacts.error = action.payload;
          state.contacts.isLoading = false;
        }
      );
  },
});

export const { updateFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
