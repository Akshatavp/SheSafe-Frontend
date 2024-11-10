import React, { useState } from "react";
import { useParams } from "react-router-dom";
import UserNavbar from "../../components/user/NavBar";

const dummyContacts = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 123 456 7890",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+1 987 654 3210",
  },
  {
    id: 3,
    name: "Alice Brown",
    email: "alice.brown@example.com",
    phone: "+1 555 123 4567",
  },
];

const ContactsPage = () => {
  // Access the userId from the URL using useParams
  const { userId } = useParams();

  // Set state for contacts
  const [contacts, setContacts] = useState(dummyContacts);

  // Function to delete a contact
  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <>
      <UserNavbar />
      <div className="container mt-5">
        <div className="row">
          {contacts.map((contact) => (
            <div key={contact.id} className="col-md-4 mb-4">
              <div className="card p-3">
                <h5>{contact.name}</h5>
                <p>Email: {contact.email}</p>
                <p>Phone: {contact.phone}</p>
                <button
                  onClick={() => deleteContact(contact.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactsPage;
