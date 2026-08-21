import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <div className="background-image">
            <div className="landing-content-overlay" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', padding: '20px'}}>
              <h1 className="company-name" style={{color: '#fff', fontSize: '3rem', marginBottom: '20px'}}>Welcome to Paradise Nursery</h1>
              <AboutUs />
              <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <Link to="/plants">
                  <button className="get-started-btn" style={{padding: '15px 30px', fontSize: '1.2rem', backgroundColor: '#2e8b57', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold'}}>Get Started</button>
                </Link>
              </div>
            </div>
          </div>
        } />
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
