import { Link } from "react-router-dom";
import { useContext } from "react";
import CheckContext from "../../store/ContextAPI/check-context";

const CheckAccount = function () {
  const checkCtx = useContext(CheckContext);
  return (
    <div className="check">
      <p className="check__intro">
        Create an account or log in to view your orders,
        <br /> return or adjust your personal information.
      </p>
      <div className="check__button">
        <Link
          to="/account/signup"
          className="btn-default"
          onClick={() => {
            checkCtx.cancelCheck();
          }}
        >
          Create account
        </Link>
        <a href="#" className="btn-login">
          Login
        </a>
      </div>
    </div>
  );
};

export default CheckAccount;
