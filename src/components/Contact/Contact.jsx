import React from "react";
import { FaUser, FaPhone } from "react-icons/fa";
import css from "./Contact.module.css";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ( { contact }) => {

  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(contact.id));
  return (
    <>
      <div className={css.personData}>
        <div className={css.personName}>
          <FaUser className={css.iconPerson} />
          <p>{name}</p>
        </div>
        <div className={css.personPhon}>
          <FaPhone className={css.iconPhon} />
          <p>{contact.number}</p>
        </div>
      </div>
       <button onClick={onDelete}>Delete</button>
    </>
  );
};

export default Contact;