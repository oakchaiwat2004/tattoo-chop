import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
