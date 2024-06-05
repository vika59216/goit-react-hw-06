/*import { useEffect, useState } from "react";
import{setUsers} from "react"
import { nanoid } from "nanoid";
import "./App.css";



import ContactForm from "./components/ContactForm/ContactForm"
import Contact from "./components/Contact/Contact";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";





const App = () => {
  const [users, setUsers] = useState(() => {
    const stringifiedUsers = localStorage.getItem("users");
    if (!stringifiedUsers) return inititalContacts;
     
    const parsedUsers = JSON.parse(stringifiedUsers);
    return parsedUsers
  });
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  },[users])

  /*const inititalContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];*/

  



 /* const onAddUser = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    }
    setUsers((prevState) => [...prevState, finalUser]);
  };

  const onDeleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user => user.id !== userId)))
  }

  return (
    <div>
      <ContactForm onAddUser={onAddUser} />
      <Contact />
      <ContactList />
      <SearchBox />
      <ContactList
        users={users}
        onDeleteUser={onDeleteUser}
        boxTitle=""
        
        
      />
    
    
     
    </div>
  )

}
export default App*/



import React, { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contactDatas, setContactDatas] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    if (savedContacts) {
      return JSON.parse(savedContacts);
    }
    return [];
  });
  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContactDatas((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContactDatas((prevContacts) => {
      return prevContacts.filter((contactData) => contactData.id !== contactId);
    });
  };

  const visibleContacts = contactDatas.filter((contactData) =>
    contactData.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contactDatas));
  }, [contactDatas]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contactDatas={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;