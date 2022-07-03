const FooterForm = () => {
  return (
    <form className="footer__form">
      <label htmlFor="emailFooter">
        Join our <br /> newsletter.
      </label>
      <input type="email" id="emailFooter" />
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
