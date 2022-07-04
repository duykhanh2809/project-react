import { useSelector } from "react-redux";

const AccountInfo = () => {
  const dataUser = useSelector((state) => state.account.userData);
  return (
    <div className="account-details">
      <div className="account-general mg-bt-huge" id="general">
        <div>
          <h3 className="heading-tertiary mg-bt-large">
            Welcome {dataUser.displayName}
          </h3>
          <p className="text-describe mg-bt-medium">
            Here you can keep track of your recent activity, request
            return/exchange authorizations for orders you have received, and
            view and edit your account information or list of favorite items.
          </p>
          <a href="mailto:khanh.nguyenduy@hcmut.edu.vn" className="btn-default">
            Contact
          </a>
        </div>
        <div>
          <p className="sub-heading mg-bt-large">Contact information</p>
          <p className="text-describe">{dataUser.displayName}</p>
          <p className="text-describe">{dataUser.email}</p>
        </div>
      </div>
      <div className="account-address mg-bt-huge" id="address">
        <p className="sub-heading">Address book</p>
        <p className="text-describe">{dataUser.displayName}</p>
      </div>
      <div className="account-orders mg-bt-huge" id="orders">
        <p className="sub-heading">Orders</p>
      </div>
    </div>
  );
};

export default AccountInfo;
