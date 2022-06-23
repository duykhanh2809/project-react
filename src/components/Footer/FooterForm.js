const FooterForm = () => {
  return (
    <form className="footer__form">
      <label htmlFor="email">
        Join our <br /> newsletter.
      </label>
      <input type="email" id="email" />
      <button className="btn btn-form">Submit</button>
    </form>
  );
};

export default FooterForm;
