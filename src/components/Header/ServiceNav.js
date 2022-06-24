import { Link } from "react-router-dom";

const ServiceNav = function () {
  return (
    <ul className="service">
      <li>Search</li>
      <li>Help</li>
      <li>
        <Link to="/account" className="btn-custom">
          My Account
        </Link>
      </li>
    </ul>
  );
};

export default ServiceNav;
