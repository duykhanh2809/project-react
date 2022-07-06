import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/UI/Layout";
import Account from "./components/Account/Account";
import AccountRegister from "./components/Account/AccountRegister";
import AccountLogin from "./components/Account/AccountLogin";
// import AccountInfo from "./components/Account/AccountInfo";
import Sale from "./components/Sale/Sale";
import HomePage from "./components/Pages/HomePage";
import AllFootwear from "./components/AllFootwear/AllFootwear";
import ProductFetch from "./components/Product/ProductFetch";
import LoadingSpinner from "./components/UI/LoadingSpinner";
const AccountInfo = React.lazy(() =>
  import("./components/Account/AccountInfo")
);

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="loading-fallback">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<Account />}>
            <Route path="signup" element={<AccountRegister />} />
            <Route path="login" element={<AccountLogin />} />
            <Route path="info" element={<AccountInfo />} />
          </Route>
          <Route path="/sale" element={<Sale />} />
          <Route path="/shoes" element={<AllFootwear />} />
          <Route path="/products" element={<AllFootwear />} />
          <Route path="/products/:productId" element={<ProductFetch />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
