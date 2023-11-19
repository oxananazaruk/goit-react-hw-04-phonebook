import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { Title } from './App.styled';

const storageKey = 'contacts';
const myContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(myContacts);
  const [filters, setFilters] = useState('');

  useEffect(() => {
    const savedContacts = JSON.parse(window.localStorage.getItem(storageKey));

    if (savedContacts !== null) {
      setContacts(savedContacts);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    if (
      contacts.some(
        contact =>
          contact.name.toLocaleLowerCase() ===
          newContact.name.toLocaleLowerCase()
      )
    ) {
      return Notify.failure(`${newContact.name} is olready in your contacts`);
    }
    setContacts(prevContacts => {
      return [...prevContacts, { ...newContact, id: nanoid() }];
    });
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const filterContacts = findContact => {
    setFilters(findContact);
  };

  const visibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filters.toLocaleLowerCase())
    );
  };

  const itemContacts = visibleContacts();

  return (
    <div>
      <Title>Phonebook</Title>
      <ContactForm onAdd={addContact} />
      <Title>Contacts</Title>
      <Filter onFilter={filterContacts} />
      <Contacts items={itemContacts} onDelete={deleteContact} />
      <GlobalStyle />
    </div>
  );
};
