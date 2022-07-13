import React from "react";
import { useParams } from "react-router-dom";

const ContactDetails = () => {
  const { contactId } = useParams();

  return <h3>Contact Details Id : {contactId}</h3>;
};

export default ContactDetails;
