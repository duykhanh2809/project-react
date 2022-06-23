import srcImage from "../../assets/img/payments.webp";
import srcImageSecond from "../../assets/img/PaymentEngines.jpg";

const FooterPayments = () => {
  return (
    <div className="footer__image">
      <img src={srcImage} alt="Payment methods" className="footer__img" />
      <img src={srcImageSecond} alt="Payment methods" className="footer__img" />
    </div>
  );
};

export default FooterPayments;
