import { useState } from "react";

const AccountLogin = function () {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

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

    const signinAccout = async function () {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCUQAzV-KnsNTwjd9wRzXeUE9lPD0P4cVc",
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

      return data;
    };

    signinAccout().catch((error) => {
      console.log(error.message);
    });
  };

  return (
    <div className="account-details">
      <h3 className="heading-tertiary">Login</h3>
      <form className="account-login" onSubmit={submitHandler}>
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
        <p>Lost your password?</p>
        <button type="submit" className="btn btn-create">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default AccountLogin;
