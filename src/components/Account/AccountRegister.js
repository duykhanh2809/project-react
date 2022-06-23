const AccountRegister = function () {
  return (
    <div className="account-details">
      <h2 className="heading-secondary">Create Account</h2>
      <form className="account-register">
        <div>
          <label htmlFor="firstname">First name*</label>
          <input id="firstname" type="text" required />
        </div>
        <div>
          <label htmlFor="lastname">Last name*</label>
          <input id="lastname" type="text" required />
        </div>
        <div>
          <label htmlFor="birthday">Birthday*</label>
          <input
            id="birthday"
            type="text"
            placeholder="dd/mm/yyyy"
            required
            pattern="[0-9/-]{8,10}"
          />
        </div>
        <div>
          <label>Gender*</label>
          <input type="radio" value="Male" id="male" name="gender" required />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            value="Female"
            id="female"
            name="gender"
            required
          />
          <label htmlFor="female">Female</label>
        </div>
        <div>
          <label htmlFor="email">Email Address*</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="password">Password*</label>
          <input type="password" id="password" required minLength="6" />
        </div>
        <div>
          <input type="checkbox" value="true" id="checkbox" name="subscribe" />
          <label htmlFor="checkbox">Subscribe to newsletter</label>
        </div>
        <button type="submit" className="btn btn-create">
          Create account
        </button>
      </form>
    </div>
  );
};

export default AccountRegister;
