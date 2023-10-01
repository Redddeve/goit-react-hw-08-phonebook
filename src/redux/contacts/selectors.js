import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = createSelector(
  [state => state.contacts.contacts.items],
  items => items
);
export const selectFilter = state => state.contacts.filter;

export const selectIsLoading = state => state.contacts.contacts.isLoading;
export const selectError = state => state.contacts.contacts.error;

export const selectFiltered = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts?.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const selectContactsObj = createSelector(
  [selectFiltered, selectIsLoading, selectError],
  (contacts, loading, error) => {
    return { contacts, loading, error };
  }
);
