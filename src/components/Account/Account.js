import AccountSideBar from "./AccountSideBar";
import AccountRegister from "./AccountRegister";
import AccountLogin from "./AccountLogin";

const Account = () => {
  return (
    <div className="account">
      <AccountSideBar />
      <AccountRegister />
      {/* <AccountLogin /> */}
    </div>
  );
};

export default Account;
