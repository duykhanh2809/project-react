import { Routes, Route } from "react-router-dom";

import Layout from "./components/UI/Layout";
import Account from "./components/Account/Account";
import AccountRegister from "./components/Account/AccountRegister";
import AccountLogin from "./components/Account/AccountLogin";
import Sale from "./components/Sale/Sale";
import HomePage from "./components/Pages/HomePage";
import AllFootwear from "./components/AllFootwear/AllFootwear";
import ProductFetch from "./components/Product/ProductFetch";
// import ErrorBoundary from "./components/UI/ErrorBoundary";
// import { useLocation } from "react-router-dom";

function App() {
  // const location = useLocation();
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<Account />}>
          <Route path="signup" element={<AccountRegister />} />
          <Route path="login" element={<AccountLogin />} />
        </Route>
        <Route path="/sale" element={<Sale />} />
        <Route path="/shoes" element={<AllFootwear />} />
        <Route path="/products" element={<AllFootwear />} />
        <Route path="/products/:productId" element={<ProductFetch />} />
      </Routes>
    </Layout>
  );
}

export default App;
