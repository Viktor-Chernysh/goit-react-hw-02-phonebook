import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const contactObject = {
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    };
    // this.setState({});
    this.props.AddNewContact(contactObject);
    this.resetForm();
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>Name</label>
        <input
          id={this.nameInputId}
          value={this.state.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          onChange={this.handleChange}
          required
        />
        <label htmlFor={this.numberInputId}>Number</label>
        <input
          id={this.numberInputId}
          value={this.state.number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          onChange={this.handleChange}
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
export default Form;
