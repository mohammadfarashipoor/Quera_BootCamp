import React from "react";

const Contact = (props) => {
  const { id, first_name, last_name, email, city, handleSelect, select } =
    props;
  return (
    <div data-testid="contact" className="contacts-list__item">
      <div>
        <h2 data-testid="fName">First Name: {first_name}</h2>
        <h2 data-testid="lName">Last Name: {last_name}</h2>
      </div>

      <div>
        <span data-testid="email" className="email">
          {email}
        </span>
      </div>

      <div>
        <p data-testid="city">City: {city}</p>
        <input
          data-testid="checkbox"
          type="checkbox"
          checked={select.includes(id)}
          onChange={() => handleSelect(id)}
        />
      </div>
    </div>
  );
};

export default Contact;
