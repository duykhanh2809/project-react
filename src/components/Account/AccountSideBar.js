import { Link } from "react-router-dom";
import { useState } from "react";

function AccountSideBar() {
  const [isLogin, setIsLogin] = useState(false);
  const clickHandler = () => {
    setIsLogin((prevState) => {
      return !prevState;
    });
  };
  return (
    <aside className="account-info">
      <h3 className="heading-tertiary">My account </h3>
      {isLogin ? (
        <Link
          to="/account/signup"
          className="btn-custom"
          onClick={clickHandler}
        >
          Create an account
        </Link>
      ) : (
        <Link to="/account/login" className="btn-custom" onClick={clickHandler}>
          I already have an account
        </Link>
      )}
    </aside>
  );
}

export default AccountSideBar;
