import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";

const AccountRegister = function () {
  const navigate = useNavigate();
  ///////////
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");

  // checkbox & radio
  const [checked, setChecked] = useState(false);
  const [radioOne, setRadioOne] = useState(false);
  const [radioTwo, setRadioTwo] = useState(false);

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
  const birthdayHandler = (event) => {
    setBirthday(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // const update = () =>
    //   toast("Please waiting...", {
    //     position: toast.POSITION.TOP_CENTER,
    //     className: "info-bar",
    //     // autoClose: 1500,
    //   });

    // update();

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
      const data = await response.json();

      if (data.error) throw new Error(data.error.message);

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
      return dataUpdate;
    };

    postSignupToServer()
      .then(() =>
        toast.success("Signup successful", {
          position: toast.POSITION.TOP_CENTER,
          className: "info-bar",
          autoClose: 1500,
        })
      )
      .then(() =>
        toast.info("PLEASE LOG IN NOW !", {
          position: toast.POSITION.TOP_CENTER,
          className: "info-bar",
        })
      )
      .catch((error) =>
        toast.error(error.message, {
          position: toast.POSITION.TOP_CENTER,
          className: "info-bar",
          autoClose: 1500,
        })
      );

    setEmailInput("");
    setPasswordInput("");
    setFirstName("");
    setLastName("");
    setBirthday("");

    // checkbox and radio button
    setChecked(false);
    setRadioOne(false);
    setRadioTwo(false);
  };

  return (
    <div className="account-details">
      <h3 className="heading-tertiary mg-bt-large">Create Account</h3>
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
            value={birthday}
            onChange={birthdayHandler}
          />
        </div>
        <div>
          <label>Gender*</label>
          <input
            type="radio"
            value="Male"
            id="male"
            name="gender"
            required
            checked={radioOne}
            onChange={(event) => {
              setRadioOne(event.target.checked);
            }}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            value="Female"
            id="female"
            name="gender"
            required
            checked={radioTwo}
            onChange={(event) => {
              setRadioTwo(event.target.checked);
            }}
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
          <input
            type="checkbox"
            checked={checked}
            value="checked"
            id="checkbox"
            name="subscribe"
            onChange={(event) => {
              setChecked(event.target.checked);
            }}
          />
          <label htmlFor="checkbox">Subscribe to newsletter</label>
        </div>
        <button type="submit" className="btn btn-create">
          Create account
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AccountRegister;
