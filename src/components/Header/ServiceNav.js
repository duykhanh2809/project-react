import { useContext } from "react";
import CheckContext from "../../store/ContextAPI/check-context";
import { useSelector } from "react-redux";

const ServiceNav = function (props) {
  const checkCtx = useContext(CheckContext);
  const nameAccount = useSelector(
    (state) => state.account.userData.displayName
  );

  const showCheckAccountHandler = () => {
    checkCtx.cancelCheck();
    checkCtx.setAccountChecking();
  };

  return (
    <ul className="service">
      <li>Search</li>
      <li>Help</li>
      <li>
        <button className="btn btn-nav" onClick={showCheckAccountHandler}>
          {nameAccount ? nameAccount : "My Account"}
        </button>
      </li>
    </ul>
  );
};

export default ServiceNav;
