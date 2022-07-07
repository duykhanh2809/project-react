import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { accountActions } from "../../store/redux/account-slice";
import { fetchDataUser } from "../../store/redux/account-actions";

const AccountLogin = function () {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [idUser, setIdUser] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailChangeHandler = (event) => {
    setEmailInput(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPasswordInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

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
      const data = await response.json();
      setIdUser(data.idToken);
      if (data.error) throw new Error(data.error.message);
      return data;
    };

    signinAccout()
      .then(() =>
        toast.success(
          "Login successful, navigate to homepage within the next few seconds...",
          {
            position: toast.POSITION.TOP_CENTER,
            className: "info-bar info-bar__login",
            autoClose: 1500,
          }
        )
      )
      .then(() => {
        setTimeout(() => {
          navigate("/", { replace: true });
          dispatch(accountActions.updateState());
        }, 2000);
      })
      .catch((error) =>
        toast.error(error.message, {
          position: toast.POSITION.TOP_CENTER,
          className: "info-bar ",
          autoClose: 1500,
        })
      );

    setEmailInput("");
    setPasswordInput("");
  };

  useEffect(() => {
    if (!idUser) return;
    dispatch(fetchDataUser(idUser));
  }, [idUser, dispatch]);

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
      <ToastContainer />
    </div>
  );
};

export default AccountLogin;
