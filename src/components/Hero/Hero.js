import heroImage from "../../assets/img/hero_image.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-section">
      <img src={heroImage} alt="image hero section" className="hero__img" />
      <div className="hero__content">
        <p>Don't miss out.</p>
        <h2 className="heading-secondary">We're live.</h2>
        <p className="hero__intro">
          Spring - Summer sale has landed online and in our Flagship Store. It's
          our only sale of the season, so get to it and don't sleep on it.
        </p>
        <Link to="/sale" className="btn-default">
          Shop Sale.
        </Link>
      </div>
    </section>
  );
};

export default Hero;
