import React, { useState } from "react";
import Contact from "./components/Contact/Contact";

const App = () => {
  const [people, setPeople] = useState([
    {
      id: 1,
      first_name: "Kennie",
      last_name: "Garth",
      email: "kgarth0@ovh.net",
      city: "Megati Kelod",
    },
    {
      id: 2,
      first_name: "Free",
      last_name: "Eltringham",
      email: "feltringham1@weebly.com",
      city: "Haradzishcha",
    },
    {
      id: 3,
      first_name: "Isadore",
      last_name: "Valintine",
      email: "ivalintine2@issuu.com",
      city: "El Benque",
    },
    {
      id: 4,
      first_name: "Annora",
      last_name: "Neilus",
      email: "aneilus3@uol.com.br",
      city: "Uchaly",
    },
    {
      id: 5,
      first_name: "Tabbie",
      last_name: "Rizzini",
      email: "trizzini4@cpanel.net",
      city: "Pora",
    },
  ]);
  const [select, setSelect] = useState([]);
  const handleSelect = (id) => {
    const selectList = [...select];
    if (selectList.includes(id)) {
      const indexId = selectList.indexOf(id);
      selectList.splice(indexId, 1);

      return setSelect(selectList);
    }
    setSelect((prev) => [...prev, id]);
  };
  const handlDelete = () => {
    let newPeople = [...people];
    select.forEach((id) => {
      newPeople = newPeople.filter((person) => person.id !== id);
    });
    setPeople(newPeople);
    setSelect([]);
  };
  return (
    <div data-testid="app" className="app">
      {/* ----------------------------------left side------------------------------------- */}

      <section className="contacts-section">
        <div className="contacts-list">
          {people.map((person) => {
            return (
              <Contact
                key={person.id}
                {...person}
                handleSelect={handleSelect}
                select={select}
              />
            );
          })}
        </div>
      </section>

      {/* ----------------------------------right side------------------------------------- */}

      <section className="cta-section">
        <p className="text-2xl">Selected:</p>
        <p data-testid="selectedIds">{select.join(",")}</p>

        <button data-testid="deleteBtn" className="cta" onClick={handlDelete}>
          Delete Selected Items
        </button>
      </section>
    </div>
  );
};

export default App;
