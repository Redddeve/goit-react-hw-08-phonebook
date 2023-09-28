import { StyledButton, StyledForm, StyledLabel } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const phone = form.elements.number.value;

    if (name === '') {
      form.reset();
      return;
    }
    const contact = {
      id: nanoid(),
      name,
      phone,
    };
    const contExist = contacts.find(
      cont =>
        cont.name.toLowerCase() === name.toLowerCase() || cont.number === phone
    );
    if (contExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact(contact));
    form.reset();
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledLabel htmlFor="name">Name</StyledLabel>

      <input
        type="text"
        name="name"
        id="name"
        pattern="^[a-zA-Zа-яА-Я]+((['-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <StyledLabel htmlFor="number">Number</StyledLabel>
      <input
        type="tel"
        name="number"
        id="number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <StyledButton type="submit">Add contact</StyledButton>
    </StyledForm>
  );
};

export default ContactForm;
