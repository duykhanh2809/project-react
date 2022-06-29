import { Fragment } from "react";
import About from "../About/About";
import FavoriteProduct from "../Favorite/FavoriteProduct";
import Hero from "../Hero/Hero";
import Story from "../Story/Story";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <Story />
      <FavoriteProduct anotherSite={false} />
      <About />
    </Fragment>
  );
};

export default HomePage;
