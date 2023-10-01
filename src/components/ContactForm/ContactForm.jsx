import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (name === '') {
      form.reset();
      return;
    }
    const contact = {
      name,
      number,
    };
    const contExist = contacts?.find(
      cont =>
        cont.name.toLowerCase() === name.toLowerCase() || cont.number === number
    );
    if (contExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact(contact));
    form.reset();
  };

  return (
    <form
      className="flex flex-col gap-2.5 w-[500px] p-2.5 shadow-[0_0_5px_0_rgba(0,0,0,0.3)] mb-10 mt-5"
      onSubmit={onSubmit}
    >
      <label className="w-fit" htmlFor="name">
        Name
      </label>

      <input
        type="text"
        name="name"
        id="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className="w-fit" htmlFor="number">
        Number
      </label>
      <input
        type="tel"
        name="number"
        id="number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button
        className="w-fit py-2 px-8 bg-white cursor-pointer border border-gray-500 rounded-xl hover:text-white hover:bg-teal-800"
        type="submit"
      >
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
