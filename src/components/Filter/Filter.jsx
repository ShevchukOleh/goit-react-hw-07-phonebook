import { Input, Label} from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const search = (event) => {
    dispatch(filter(event.target.value));
  };

  return (
    <Label>Find contacts by name
      <Input name="filter" onChange={search}/>
    </Label>
  );
};