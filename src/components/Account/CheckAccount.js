import { Link } from "react-router-dom";
import { Fragment, useContext, useState, useEffect } from "react";
import CheckContext from "../../store/ContextAPI/check-context";
import { useSelector, useDispatch } from "react-redux";
import { accountActions } from "../../store/redux/account-slice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckAccount = function () {
  const [isClicked, setIsClicked] = useState(false);
  const checkCtx = useContext(CheckContext);
  const dispatch = useDispatch();
  const accountState = useSelector((state) => state.account.isLoggedIn);
  const cancelCheck = () => {
    checkCtx.cancelCheck();
  };

  const logoutAccount = () => {
    setIsClicked(true);
    toast.info("Logout successful", {
      position: toast.POSITION.TOP_CENTER,
      className: "info-bar ",
      autoClose: 1500,
    });
  };

  useEffect(() => {
    if (!isClicked) return;
    const time = setTimeout(() => {
      dispatch(accountActions.initialReset());
      checkCtx.cancelCheck();
      localStorage.removeItem("user");
    }, 2000);
    return () => {
      clearTimeout(time);
    };
  }, [isClicked, accountState]);

  return (
    <div className="check">
      {accountState && (
        <Fragment>
          <div className="check__intro">
            <Link
              to="/account/info"
              className="btn-custom"
              onClick={cancelCheck}
            >
              Personal information
            </Link>
          </div>
          <div className="check__button">
            <button className="btn btn-nav" onClick={logoutAccount}>
              Logout
            </button>
            <Link
              to="/account/info"
              className="btn-login"
              onClick={cancelCheck}
            >
              My account
            </Link>
          </div>
        </Fragment>
      )}
      {!accountState && (
        <Fragment>
          <p className="check__intro">
            Create an account or log in to view your orders,
            <br /> return or adjust your personal information.
          </p>
          <div className="check__button">
            <Link
              to="/account/signup"
              className="btn-default"
              onClick={cancelCheck}
            >
              Create account
            </Link>
            <Link
              to="/account/login"
              className="btn-login"
              onClick={cancelCheck}
            >
              Login
            </Link>
          </div>
        </Fragment>
      )}
      <ToastContainer />
    </div>
  );
};

export default CheckAccount;
