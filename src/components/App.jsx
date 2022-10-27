import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Section } from './App.styled';
import { useState, useEffect } from 'react';
export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  const onSubmitForm = (name, number) => {
    if (contacts.some(el => el.name === name.toLowerCase())) {
      return alert(`${name} is already contacts`);
    } else {
      const user = { id: nanoid(), name: name, number: number };
      setContacts(contacts => [...contacts, user]);
    }
  };
  const filterInputText = text => {
    const filterText = text.toLowerCase();
    setFilter(filter => filterText);
  };

  const onFilter = () => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };
  const deletecontact = id => {
    setContacts(contacts => contacts.filter(el => el.id !== id));
  };
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  const visbleContacts = onFilter();

  return (
    <Section>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={onSubmitForm} />
      <h2>Contacts</h2>
      <Filter filterInputText={filterInputText} />
      <ContactList
        visbleContacts={visbleContacts}
        deletecontact={deletecontact}
      />
    </Section>
  );
};
