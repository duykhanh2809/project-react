import { Outlet } from "react-router-dom";
import AccountSideBar from "./AccountSideBar";

const Account = () => {
  return (
    <div className="account">
      <AccountSideBar />
      <Outlet />
    </div>
  );
};

export default Account;
