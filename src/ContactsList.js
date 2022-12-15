import React from "react";

export default function ContactsList(props) {
  const contacts = props.contacts.map((contact, index) => (
    <li key={index}>
      {contact.name}: {contact.email}
    </li>
  ));

  return (
    <div>
      <h1>Contacts</h1>
      <ul>{contacts}</ul>
    </div>
  );
}
