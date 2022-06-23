import { Fragment } from "react";
import FooterForm from "./FooterForm";
import FooterPayments from "./FooterPayments";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="footer__about">
          <p className="footer__heading">About</p>
          <p>
            Founded in 2010 in Amsterdam, ETQ derived under the mindset of
            eliminating over-accessorized branding and focusing primarily on
            letting the quality of the product speak for itself.{" "}
            <a href="#" className="btn-default">
              Read more
            </a>
          </p>
        </div>
        <div className="footer__address">
          <p className="footer__heading">Address</p>
          <a href="#" className="btn-address">
            Singel 465
            <br /> 1012 WP Amsterdam
            <br /> The Netherlands
          </a>
        </div>
        <div className="footer__contact">
          <p className="footer__heading">Contact</p>
          <a href="#" className="btn-custom">
            Email us
          </a>
          <br />
          <a href="#" className="btn-custom">
            +31 (0) 20 225 61 53
          </a>
        </div>
        <div className="footer__info">
          <p className="footer__heading">Info</p>
          <ul>
            <li>
              <a href="#" className="btn-custom">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="btn-custom">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="btn-custom">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="btn-custom">
                Wholesale
              </a>
            </li>
            <li>
              <a href="#" className="btn-custom">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__follow">
          <p className="footer__heading">Follow us</p>
          <ul>
            <li>
              <a href="#" className="btn-custom">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="btn-custom">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="btn-custom">
                Pinterest
              </a>
            </li>
            <li>
              <a href="#" className="btn-custom">
                Tiktok
              </a>
            </li>
          </ul>
        </div>
        <FooterForm />
        <FooterPayments />
        <p className="footer__extra">Nguyen Duy Khanh - HCMUT</p>
      </footer>
    </Fragment>
  );
};

export default Footer;
