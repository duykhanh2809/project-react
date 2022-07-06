import { Fragment } from "react";
import FooterForm from "./FooterForm";
import FooterPayments from "./FooterPayments";
import FooterAccordion from "./FooterAccordion";

const FooterQueries = () => {
  return (
    <Fragment>
      <footer className="footer container">
        <FooterAccordion item="about" heading="About">
          <p>
            Founded in 1610 in Amsterdam, ETQ derived under the mindset of
            eliminating over-accessorized branding and focusing primarily on
            letting the quality of the product speak for itself.{" "}
            <a href="#" className="btn-default">
              Read more
            </a>
          </p>
        </FooterAccordion>
        <FooterAccordion item="address" heading="Address">
          <a href="#" className="btn-address">
            Singel 465
            <br /> 1012 WP Amsterdam
            <br /> The Netherlands
          </a>
        </FooterAccordion>
        <FooterAccordion item="contact" heading="Contact">
          <a href="#" className="btn-custom">
            Email us
          </a>
          <a href="#" className="btn-custom">
            +31 (0) 16 225 61 53
          </a>
        </FooterAccordion>
        <FooterAccordion item="info" heading="Info">
          <ul className="footer__list">
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
        </FooterAccordion>
        <FooterAccordion item="follow" heading="Follow us">
          <ul className="footer__list">
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
        </FooterAccordion>

        <FooterForm />
        <FooterPayments />
        <p className="footer__extra">Nguyen Duy Khanh - HCMUT</p>
      </footer>
    </Fragment>
  );
};

export default FooterQueries;
