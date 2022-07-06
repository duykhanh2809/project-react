const FooterForm = () => {
  return (
    <form className="footer__form">
      <label htmlFor="emailFooter" className="footer__form-label">
        Join our <br /> newsletter.
      </label>
      <input type="email" id="emailFooter" className="footer__form-input" />
      <button
        className="btn btn-form"
        onClick={(event) => {
          event.preventDefault();
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default FooterForm;
