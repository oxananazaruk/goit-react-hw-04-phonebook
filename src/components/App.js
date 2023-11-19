import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { Title } from './App.styled';

const storageKey = 'contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = window.localStorage.getItem(storageKey);
    if (savedContacts !== null) {
      this.setState({
        filters: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      window.localStorage.setItem(
        storageKey,
        JSON.stringify(this.state.contacts)
      );
    }
  }

  addContact = newContact => {
    const { contacts } = this.state;
    if (
      contacts.some(
        contact =>
          contact.name.toLocaleLowerCase() ===
          newContact.name.toLocaleLowerCase()
      )
    ) {
      return Notify.failure(`${newContact.name} is olready in your contacts`);
    }
    this.setState(prewState => {
      return {
        contacts: [...prewState.contacts, { ...newContact, id: nanoid() }],
      };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== contactId),
      };
    });
  };

  filterContacts = findContact => {
    this.setState({
      filter: findContact,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(contact => {
      const hasFilter = contact.name
        .toLocaleLowerCase()
        .includes(filter.toLocaleLowerCase());
      return hasFilter;
    });

    return (
      <div>
        <Title>Phonebook</Title>
        <ContactForm onAdd={this.addContact} />
        <Title>Contacts</Title>
        <Filter onFilter={this.filterContacts} />
        <Contacts items={visibleContacts} onDelete={this.deleteContact} />
        <GlobalStyle />
      </div>
    );
  }
}
