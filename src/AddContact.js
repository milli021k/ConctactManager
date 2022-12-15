import React, { useState } from "react";

export default function AddContact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onAddContact({ name, email });
    setName("");
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add contact</h1>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
