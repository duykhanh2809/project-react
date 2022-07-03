import { Fragment } from "react";
import About from "../About/About";
import FavoriteProduct from "../Favorite/FavoriteProduct";
import Hero from "../Hero/Hero";
import Story from "../Story/Story";
import ErrorBoundary from "../UI/ErrorBoundary";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <Story />
      <ErrorBoundary>
        <FavoriteProduct anotherSite={false} />
      </ErrorBoundary>
      <About />
    </Fragment>
  );
};

export default HomePage;
