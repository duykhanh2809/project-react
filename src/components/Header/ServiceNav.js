import React, { useContext } from "react";
import CheckContext from "../../store/ContextAPI/check-context";
import { useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";

const ServiceNav = function (props) {
  const location = useLocation();
  const checkCtx = useContext(CheckContext);
  const nameAccount = useSelector(
    (state) => state.account.userData.displayName
  );

  const showCheckAccountHandler = () => {
    checkCtx.cancelCheck();
    checkCtx.setAccountChecking();
  };

  const serviceClasses =
    location.pathname !== "/" || props.isChecking
      ? "service service-modify"
      : "service";

  return (
    <ul className={serviceClasses}>
      <li>
        <Link to={"/search"} className="btn-custom">
          Search
        </Link>
      </li>
      <li>Help</li>
      <li>
        <button className="btn btn-nav" onClick={showCheckAccountHandler}>
          {nameAccount ? nameAccount : "My Account"}
        </button>
      </li>
    </ul>
  );
};

export default React.memo(ServiceNav);
