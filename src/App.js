import React from "react";
import Headr from "./Headr";
import { useState } from "react";
import AddContact from "./AddContact";
import ContactsList from "./ContactsList";
import TextFileSaver from "./TextFileSaver";
import SendFileToApi from "./SendFileToApi";

export default function App() {
  const [contacts, setContacts] = useState([]);

  function handleAddContact(contact) {
    setContacts([...contacts, contact]);
  }

  return (
    <div>
      <Headr />
      <TextFileSaver />
      <AddContact onAddContact={handleAddContact} />
      <ContactsList contacts={contacts} />
      <h1> to send to API</h1>
      <SendFileToApi />
    </div>
  );
}
