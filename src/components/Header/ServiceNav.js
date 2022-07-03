import { useContext } from "react";
import CheckContext from "../../store/ContextAPI/check-context";

const ServiceNav = function (props) {
  const checkCtx = useContext(CheckContext);

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
          My Account
        </button>
      </li>
    </ul>
  );
};

export default ServiceNav;
