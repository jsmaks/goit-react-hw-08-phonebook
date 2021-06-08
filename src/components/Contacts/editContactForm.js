import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactOperations from '../../redux/phonebook/phonebook-operations';
// import contactSelectors from "../../redux/phonebook/phonebook-selectors";

const styles = {
  form: {
    display: 'flex',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // borderBottom: '1px solid #2A363B',
  },
};

class editContactForm extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  componentDidMount() {
    this.setState({
      id: this.props.contactItem.id,
      name: this.props.contactItem.name,
      number: this.props.contactItem.number,
    });
    // this.setState({ number: this.props.contactItem.number });
  }

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.editContact(this.state);
    this.props.closeContact();
  };

  render() {
    const { name, number } = this.state;
    const { closeContact } = this.props;

    return (
      <form style={styles.form} onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={this.handleChange}
          />
        </label>

        <button className="btn" type="submit">
          Save
        </button>
        <button className="btn" type="button" onClick={closeContact}>
          Close
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  editContact: contactOperations.editContact,
};

export default connect(null, mapDispatchToProps)(editContactForm);
