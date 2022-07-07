import { Link, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { accountActions } from "../../store/redux/account-slice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AccountSideBar() {
  const [isLogin, setIsLogin] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accountState = useSelector((state) => state.account.isLoggedIn);

  const clickHandler = () => {
    setIsLogin((prevState) => {
      return !prevState;
    });
  };

  const logoutHandler = useCallback(() => {
    setIsClicked(true);
    toast.info("Logout successful", {
      position: toast.POSITION.TOP_CENTER,
      className: "info-bar info-bar__login",
      autoClose: 1500,
    });
  }, []);

  useEffect(() => {
    if (!isClicked) return;
    const time = setTimeout(() => {
      dispatch(accountActions.initialReset());
      localStorage.removeItem("user");
      navigate("/", { replace: true });
    }, 2000);
    return () => {
      clearTimeout(time);
    };
  }, [isClicked, accountState, dispatch, navigate]);

  return (
    <aside className="account-sidebar">
      <ToastContainer />
      <h3 className="heading-tertiary mg-bt-large">My account </h3>
      {!accountState && isLogin && (
        <Link
          to="/account/signup"
          className="btn-custom"
          onClick={clickHandler}
        >
          Create an account
        </Link>
      )}
      {!accountState && !isLogin && (
        <Link to="/account/login" className="btn-custom" onClick={clickHandler}>
          I already have an account
        </Link>
      )}
      {accountState && (
        <ul className="account__options">
          <li>
            <a href="#general" className="btn-custom">
              Contact information
            </a>
          </li>
          <li>
            <a href="#address" className="btn-custom">
              Address book
            </a>
          </li>
          <li>
            <a href="#orders" className="btn-custom">
              Orders
            </a>
          </li>
          <li>
            <button className="btn btn-nav" onClick={logoutHandler}>
              Log out
            </button>
          </li>
        </ul>
      )}
    </aside>
  );
}

export default AccountSideBar;
