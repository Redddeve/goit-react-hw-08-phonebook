import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

const Contacts = () => {
  return (
    <>
      <h2 className="font-semibold">Add contact</h2>
      <ContactForm />

      <h2 className="font-semibold">Your contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;
