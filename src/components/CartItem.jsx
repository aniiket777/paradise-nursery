import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/CartSlice';

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const grandTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    alert("Coming Soon!");
  };

  return (
    <div className="cart-container" style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h2 style={{ color: '#555' }}>Your cart is empty</h2>
          <Link to="/plants">
            <button style={{ 
              marginTop: '20px', 
              padding: '10px 20px', 
              backgroundColor: '#2e8b57', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: 'pointer',
              fontSize: '1rem' 
            }}>
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <div className="cart-items" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item-card" style={{ display: 'flex', alignItems: 'center', border: '1px solid #eee', borderRadius: '8px', padding: '15px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '4px', marginRight: '20px' }} />
                
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: '0 0 10px 0' }}>{item.name}</h3>
                  <p style={{ margin: '0 0 10px 0', color: '#555' }}>Unit Price: ${item.price}</p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '4px', overflow: 'hidden' }}>
                      <button 
                        onClick={() => dispatch(decreaseQuantity(item.id))} 
                        style={{ padding: '5px 15px', border: 'none', background: '#f5f5f5', cursor: 'pointer', fontSize: '1.2rem' }}
                      >
                        -
                      </button>
                      <span style={{ padding: '5px 15px', fontWeight: 'bold' }}>{item.quantity}</span>
                      <button 
                        onClick={() => dispatch(increaseQuantity(item.id))} 
                        style={{ padding: '5px 15px', border: 'none', background: '#f5f5f5', cursor: 'pointer', fontSize: '1.2rem' }}
                      >
                        +
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => dispatch(removeFromCart(item.id))} 
                      style={{ padding: '6px 12px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                    >
                      Delete
                    </button>
                  </div>
                </div>

                <div style={{ textAlign: 'right', minWidth: '120px' }}>
                  <p style={{ fontSize: '1.1rem', margin: '0', fontWeight: 'bold' }}>Total: ${item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '40px', padding: '20px', borderTop: '2px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <h2 style={{ margin: '0 0 10px 0' }}>Order Summary</h2>
              <p style={{ margin: '0 0 5px 0', fontSize: '1.1rem' }}>Total Items: {totalQuantity}</p>
              <p style={{ margin: '0', fontSize: '1.2rem', fontWeight: 'bold', color: '#2e8b57' }}>Grand Total: ${grandTotal}</p>
            </div>
            
            <div style={{ display: 'flex', gap: '15px' }}>
              <Link to="/plants">
                <button style={{ padding: '12px 24px', backgroundColor: '#f0f0f0', color: '#333', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                  Continue Shopping
                </button>
              </Link>
              <button 
                onClick={handleCheckout} 
                style={{ padding: '12px 24px', backgroundColor: '#2e8b57', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
