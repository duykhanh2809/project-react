import { Routes, Route } from "react-router-dom";

import Layout from "./components/UI/Layout";
import Hero from "./components/Hero/Hero";
import Account from "./components/Account/Account";
import AccountRegister from "./components/Account/AccountRegister";
import AccountLogin from "./components/Account/AccountLogin";
import Story from "./components/Story/Story";
import About from "./components/About/About";
import FavoriteProduct from "./components/Favorite/FavoriteProduct";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<FavoriteProduct />} />
        <Route path="/account" element={<Account />}>
          <Route path="signup" element={<AccountRegister />} />
          <Route path="login" element={<AccountLogin />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
