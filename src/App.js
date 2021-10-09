import { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Filter from './components/Filter/Filter';
import Contacts from './components/Contacts/Contacts';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  AddNewContact = contact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    // console.log(this.state.filter);
    return (
      <div>
        <h1>Phonebook</h1>
        <Form AddNewContact={this.AddNewContact} />
        <h2>Contacts</h2>
        <Filter filter={this.handleFilter} />
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
