import { StyleLabel } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const onFilterInput = e => {
    const filter = e.target.value.trim();
    dispatch(updateFilter(filter));
  };

  return (
    <div>
      <StyleLabel htmlFor="filter">Find contacts by name</StyleLabel>
      <input type="text" id="filter" onChange={onFilterInput} />
    </div>
  );
};

export default Filter;
