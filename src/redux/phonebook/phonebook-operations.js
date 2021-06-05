import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from "./phonebook-actions";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";


const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get("/contacts");
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }

  //   axios
  //     .get("/contacts")
  //     .then(({ data }) => dispatch(fetchContactsSuccess(data)))
  //     .catch((error) => dispatch(fetchContactsError(error)));
};

const addContact = (data) => (dispatch) => {
  dispatch(addContactRequest());
  axios
    .post("/contacts", data)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error.message)));
};

const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch((error) => dispatch(deleteContactError(error.message)));
};

// eslint-disable-next-line
export default {
  addContact,
  deleteContact,
  fetchContacts,
};
