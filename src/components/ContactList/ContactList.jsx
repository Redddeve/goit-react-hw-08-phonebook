import { StyledBtn, StyledItem, StyledList } from './ContactList.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsObj } from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/operations';
import Loader from 'components/Loader';

const ContactList = () => {
  const { contacts, loading, error } = useSelector(selectContactsObj);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <StyledList>
        {loading && <Loader />}
        {error && <h2>{error}</h2>}
        {contacts?.map(cont => (
          <StyledItem key={cont.id} id={cont.id}>
            {cont.name}: {cont.phone}
            <StyledBtn onClick={() => onDelete(cont.id)}>Delete</StyledBtn>
          </StyledItem>
        ))}
      </StyledList>
    </>
  );
};

export default ContactList;
