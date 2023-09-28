export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFiltered = state => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state);

  return contacts?.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const selectContactsObj = state => {
  const contacts = selectFiltered(state);
  const loading = selectIsLoading(state);
  const error = selectError(state);

  return { contacts, loading, error };
};
