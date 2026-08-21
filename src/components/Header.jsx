import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <div className="header-brand">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h2>Paradise Nursery</h2>
        </Link>
      </div>
      <nav className="header-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/plants" className="nav-link">Plants</Link>
        <Link to="/cart" className="nav-link cart-link">
          <span className="cart-icon" role="img" aria-label="cart">🛒</span>
          <span className="cart-count">({totalQuantity})</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
