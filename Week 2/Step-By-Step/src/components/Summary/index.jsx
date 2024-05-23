const Summary = ({ info }) => {
  return (
    <div className="form" data-testid="summary">
      <p data-testid="firstName">
        First Name : {info?.firstName ? info?.firstName : ""}
      </p>
      <p data-testid="lastName">
        Last Name : {info?.lastName ? info?.lastName : ""}
      </p>
      <p data-testid="phone">Phone : {info?.phone ? info?.phone : ""}</p>
      <p data-testid="gender">Gender : {info?.gender ? info?.gender : ""}</p>
    </div>
  );
};

export default Summary;
