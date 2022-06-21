import heroImage from "../../assets/img/hero_image.png";

const Hero = () => {
  return (
    <section>
      <img src={heroImage} alt="image hero section" className="hero__img" />
      <div className="hero__content">
        <p>Don't miss out.</p>
        <h3 className="heading-tertiary">We're live.</h3>
        <p>
          Spring - Summer sale has landed online and in our Flagship Store. It's
          our only sale of the season, so get to it and don't sleep on it.
        </p>
        <a href="#">Shop Sale.</a>
      </div>
    </section>
  );
};

export default Hero;
