import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/contacts/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const onFilterInput = e => {
    const filter = e.target.value.trim();
    dispatch(updateFilter(filter));
  };

  return (
    <div className="mb-5">
      <label className="mt-2.5" htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className="w-2/5"
        type="text"
        id="filter"
        onChange={onFilterInput}
      />
    </div>
  );
};

export default Filter;
