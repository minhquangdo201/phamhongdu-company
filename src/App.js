import React  from 'react';
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { OriginPage } from "./features/Origin";
import ProductPage from "./features/Product";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/origin" element={<OriginPage />} />
      </Routes>
    </div>

  );
}

export default App;