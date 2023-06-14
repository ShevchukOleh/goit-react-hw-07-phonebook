import {List, Button, ListItem, Loading, Container } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { fetchContacts } from 'redux/thunk';
import { useEffect } from 'react';

function ContactList() {
  const { items, isLoading } = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contactDelete = (id) => {
    dispatch(deleteContact(id));
  }

  const visibleContacts = items.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <Container>
      <Loading>
        {isLoading && <p>Loading...</p>}
      </Loading>
      <List>
        {visibleContacts.map(({ id, name, phone }) => (
          <ListItem key={id}>
            {name}: {phone}
            <Button type="button" onClick={() => contactDelete(id)}>Delete</Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default ContactList;