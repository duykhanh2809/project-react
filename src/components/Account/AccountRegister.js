import { useState, useReducer } from "react";

const AccountRegister = function () {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };
  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmailInput(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPasswordInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setEmailInput("");
    setPasswordInput("");
    setFirstName("");
    setLastName("");

    const postSignupToServer = async function () {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCUQAzV-KnsNTwjd9wRzXeUE9lPD0P4cVc",
        {
          method: "POST",
          body: JSON.stringify({
            email: emailInput,
            password: passwordInput,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      console.log(data);

      const updateProfile = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCUQAzV-KnsNTwjd9wRzXeUE9lPD0P4cVc",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: data.idToken,
            displayName: firstName,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!updateProfile.ok) {
        throw new Error("User information has something went wrong!");
      }

      const dataUpdate = await updateProfile.json();

      console.log(dataUpdate);

      return dataUpdate;
    };

    postSignupToServer().catch((error) => {
      console.log(error.message);
    });
  };

  return (
    <div className="account-details">
      <h3 className="heading-tertiary">Create Account</h3>
      <form className="account-register" onSubmit={submitHandler}>
        <div>
          <label htmlFor="firstname">First name*</label>
          <input
            id="firstname"
            type="text"
            required
            value={firstName}
            onChange={firstNameChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="lastname">Last name*</label>
          <input
            id="lastname"
            type="text"
            required
            value={lastName}
            onChange={lastNameChangeHandler}
          />
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
          <input
            type="email"
            id="email"
            required
            value={emailInput}
            onChange={emailChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="password">Password*</label>
          <input
            type="password"
            id="password"
            required
            minLength="6"
            value={passwordInput}
            onChange={passwordChangeHandler}
          />
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
