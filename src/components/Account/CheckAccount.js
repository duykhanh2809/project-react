const CheckAccount = function () {
  return (
    <div className="check">
      <p className="check__intro">
        Create an account or log in to view your orders,
        <br /> return or adjust your personal information.
      </p>
      <div className="check__button">
        <a href="#" className="btn-default">
          Create account
        </a>
        <a href="#" className="btn-login">
          Login
        </a>
      </div>
    </div>
  );
};

export default CheckAccount;
