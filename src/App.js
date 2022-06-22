import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Layout from "./components/layout/Layout";
import AllProducts from "./pages/AllProducts";
import NewProduct from "./pages/NewProduct";
import ProductDetail from "./pages/ProductDetail";
/* import NotFound from "./pages/NotFound"; */

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate replace to="/products" />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/new-product" element={<NewProduct />} />
          <Route path="*" element={<Navigate replace to="/products" /> } />
        </Routes>
      </Layout>
    </React.Fragment>
  );
}

export default App;
