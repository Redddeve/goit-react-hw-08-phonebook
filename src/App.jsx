import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Wrapper } from 'styles/App.styled';

const App = () => {
  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Wrapper>
  );
};

export default App;
