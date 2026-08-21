import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route
          path="/plants"
          element={
            <>
              <Header />
              <ProductList />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Header />
              <CartItem />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
