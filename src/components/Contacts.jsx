import React from "react";

const contact = {
  mobile: "(+994)51 537 25 34",
  email: "xezanekerimova@icloud.com",
};

function Contacts() {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        <li>Mobile: {contact.mobile}</li>
        <li>E-mail: {contact.email}</li>
      </ul>
    </div>
  );
}

export default Contacts;
