import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Information from "./components/Informations";
import Details from "./components/Details";
import Summary from "./components/Summary";

function App() {
  // TODO declate step state using useState
  const [steps, setSteps] = useState(["informations"]);

  // TODO declare formValues state using useState
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const formValues = {
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    gender: gender,
  };
  // TODO handleChangeValues function
  // const handleInfo = (e, type) => {
  //   const value = e.target.value;
  //   switch (type) {
  //     case "firstName":
  //       setInfo((prev) => ({ ...prev, firstName: value }));
  //       break;
  //     case "lastName":
  //       setInfo((prev) => ({ ...prev, lastName: value }));

  //       break;
  //     case "phone":
  //       setInfo((prev) => ({ ...prev, phone: value }));

  //       break;
  //     case "gender":
  //       setInfo((prev) => ({ ...prev, gender: value }));

  //       break;
  //   }
  // };
  function firstNameHandle(event) {
    setFirstName(event.target.value);
  }
  function lastNameHandle(event) {
    setLastName(event.target.value);
  }

  function genderHandle(event) {
    setGender(event.target.value);
  }
  function phoneHandle(event) {
    setPhone(event.target.value);
  }
  const prevStep = () => {
    const currentSteps = [...steps];
    currentSteps.pop();
    setSteps(currentSteps);
  };
  const nextStep = () => {
    const currentSteps = [...steps];
    switch (currentSteps.length) {
      case 1:
        currentSteps.push("details");
        break;

      case 2:
        currentSteps.push("summary");
        break;
    }

    setSteps(currentSteps);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card__header">
          <div
            className={`card__header-item ${
              steps.includes("informations") && "current-step"
            }`}
          >
            Informations
          </div>
          <div
            className={`card__header-item ${
              steps.includes("details") && "current-step"
            }`}
          >
            Details
          </div>
          <div
            className={`card__header-item ${
              steps.includes("summary") && "current-step"
            }`}
          >
            Summary
          </div>
        </div>
        <div className="card__body">
          {steps[steps.length - 1] === "informations" && (
            <Information
              firstNameValue={firstName}
              lastNameValue={lastName}
              firstNameHandle={firstNameHandle}
              lastNameHandle={lastNameHandle}
            />
          )}
          {steps[steps.length - 1] === "details" && (
            <Details
              genderHandle={genderHandle}
              phoneHandle={phoneHandle}
              phone={phone}
              gender={gender}
            />
          )}
          {steps[steps.length - 1] === "summary" && (
            <Summary info={formValues} />
          )}
        </div>
        <div className="card__footer">
          <button
            className="btn-prev"
            disabled={steps.length === 1}
            onClick={prevStep}
          >
            prev
          </button>
          <button
            className="btn-next"
            disabled={steps.length === 3}
            onClick={nextStep}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
