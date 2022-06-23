const ServiceNav = function () {
  const accountHandler = () => {
    console.log("Bam roi");
  };
  return (
    <ul className="service">
      <li>Search</li>
      <li>Help</li>
      <li>
        <button className="btn btn-nav" onClick={accountHandler}>
          My Account
        </button>
      </li>
    </ul>
  );
};

export default ServiceNav;
