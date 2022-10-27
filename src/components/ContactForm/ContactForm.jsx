import PropTypes from 'prop-types';
import { Label, Input, Form, Button } from './ContactForm.styled';
import { useState } from 'react';
export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNamber] = useState('');
  const submitForm = e => {
    e.preventDefault();
    onSubmit(name, number);
    e.target.reset();
  };
  const changeNameNumber = e => {
    const changeText = e.target.value;
    const inputName = e.target.name;
    switch (inputName) {
      case 'name':
        setName(() => changeText);
        break;
      case 'number':
        setNamber(() => changeText);
        break;
      default:
        break;
    }
  };
  return (
    <Form onSubmit={submitForm}>
      <Label htmlFor="name">Name:</Label>
      <Input
        onChange={changeNameNumber}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor="number">Number:</Label>
      <Input
        onChange={changeNameNumber}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
