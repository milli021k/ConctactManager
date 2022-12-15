import React from "react";
import Headr from "./Headr";
import AddContact from "./AddContact";
import ContactsList from "./ContactsList";

export default function App() {
  return (
    <div>
      <Headr></Headr>
      <AddContact />
      <ContactsList />
    </div>
  );
}
