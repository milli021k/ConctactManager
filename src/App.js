import React from "react";
import Headr from "./Headr";
import { useState } from "react";
import AddContact from "./AddContact";
import ContactsList from "./ContactsList";

export default function App() {
  const [contacts, setContacts] = useState([]);

  function handleAddContact(contact) {
    setContacts([...contacts, contact]);
  }

  return (
    <div>
      <Headr />
      <AddContact onAddContact={handleAddContact} />
      <ContactsList contacts={contacts} />
    </div>
  );
}
