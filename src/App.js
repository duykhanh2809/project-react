import { Routes, Route } from "react-router-dom";

import Layout from "./components/UI/Layout";
import Hero from "./components/Hero/Hero";
import Account from "./components/Account/Account";

function App() {
  return (
    <Layout>
      {/* <Header pages="hero" />  */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Layout>
  );
}

export default App;
