import React, { Component } from 'react';
import './Contacts.css';
import { connect } from 'react-redux';
import { contactsSelectors, contactOperations } from '../../redux/phonebook';
import EditContactForm from './editContactForm';

class Contacts extends Component {
  state = {
    editContact: false,
    idContact: null,
  };

  handleToggleEditForm = id => {
    this.setState({ editContact: false});
    this.setState({ editContact: true, idContact: id });
    
  };

  render() {
    const { libraryContacts, onDelete } = this.props;

    return (
      <div>
        <ul className="contacts__list">
          {libraryContacts.map(el => (
            <li className="contacts__item" key={el.id}>
              <p className="contact__name">
                {el.name}:<span className="contact__tel">{el.number}</span>
              </p>
              <button className="btn btn-red" onClick={() => onDelete(el.id)}>
                Delete
              </button>
              {this.state.editContact && this.state.idContact === el.id ? <EditContactForm
                  closeContact={this.handleToggleEditForm}
                  contactItem={el}
                />: <button
                className="btn"
                onClick={() => this.handleToggleEditForm(el.id)}
              >
                Edit
              </button>}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  libraryContacts: contactsSelectors.getVisibleContacts(state),
});

const mapDisptachToProps = {
  onDelete: contactOperations.deleteContact,
  onEdit: contactOperations.editContact,
};

export default connect(mapStateToProps, mapDisptachToProps)(Contacts);
