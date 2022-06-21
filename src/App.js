import { Fragment } from "react";
import Header from "./components/Navigation/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Hero />
      </main>
    </Fragment>
  );
}

export default App;
