import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsObj } from 'redux/contacts/selectors';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
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
      <ul className="flex gap-6 flex-col pt-2.5 pb-5">
        {loading && <Loader />}
        {error && <p>{error}</p>}
        {contacts?.map(cont => (
          <li
            className="flex justify-between items-center min-w-fit max-w-screen-sm p-1.5 shadow-[0_0_5px_0_rgba(0,0,0,0.3)]"
            key={cont.id}
            id={cont.id}
          >
            {cont.name}: {cont.number}
            <button
              className="w-fit py-1 px-3 ml-4 bg-white cursor-pointer border border-gray-500 rounded-xl hover:text-white hover:bg-teal-800"
              onClick={() => onDelete(cont.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
