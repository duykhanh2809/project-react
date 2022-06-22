import { Fragment } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Account from "./components/Account/Account";
import "./App.css";

function App() {
  return (
    <Fragment>
      {/* <Header pages="hero" />
      <main>
        <Hero />
      </main> */}
      <Account />
    </Fragment>
  );
}

export default App;
