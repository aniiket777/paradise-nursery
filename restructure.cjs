const fs = require('fs');
const path = require('path');

const srcDir = path.resolve('src');
const componentsDir = path.resolve('src/components');
const reduxDir = path.resolve('src/redux');

// 1. App.css
let appCss = fs.readFileSync(path.join(srcDir, 'App.css'), 'utf-8');
appCss = appCss.replace(/\.landing-page-background/g, '.background-image');
fs.writeFileSync(path.join(srcDir, 'App.css'), appCss);

// 2. AboutUs.jsx
const aboutUsCode = `import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <p className="company-description" style={{color: '#fff', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center', lineHeight: '1.6'}}>
        At Paradise Nursery, your premier destination for lush, beautiful houseplants! 
        We believe that bringing a touch of nature indoors can completely transform your living 
        space, purify your air, and boost your mood. Whether you are a seasoned plant parent 
        or just starting your green journey, we offer a carefully curated selection of indoor 
        plants, stunning succulents, and vibrant flowering plants to suit every lifestyle. 
        Breathe life into your home with us today.
      </p>
    </div>
  );
};

export default AboutUs;
`;
fs.writeFileSync(path.join(srcDir, 'AboutUs.jsx'), aboutUsCode);

// 3. App.jsx
const appJsxCode = `import React from 'react';
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
`;
fs.writeFileSync(path.join(srcDir, 'App.jsx'), appJsxCode);

// 4. CartSlice.jsx
const cartSliceCode = `import { createSlice } from '@reduxjs/toolkit';

const loadCartFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('paradiseNurseryCart');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return []; 
  }
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: loadCartFromLocalStorage(),
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
        if (item.quantity === 0) {
          state.items = state.items.filter(i => i.id !== id);
        }
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id === action.payload);
    },
  },
});

export const { addItem, updateQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
`;
fs.writeFileSync(path.join(srcDir, 'CartSlice.jsx'), cartSliceCode);

// 5. ProductList.jsx
let productList = fs.readFileSync(path.join(componentsDir, 'ProductList.jsx'), 'utf-8');
productList = productList.replace(/import \{ addToCart \} from '\.\.\/redux\/CartSlice';/, "import { addItem } from './CartSlice';");
productList = productList.replace(/dispatch\(addToCart\(plant\)\);/, "dispatch(addItem(plant));");
fs.writeFileSync(path.join(srcDir, 'ProductList.jsx'), productList);

// 6. CartItem.jsx
let cartItem = fs.readFileSync(path.join(componentsDir, 'CartItem.jsx'), 'utf-8');
cartItem = cartItem.replace(/import \{ increaseQuantity, decreaseQuantity, removeFromCart \} from '\.\.\/redux\/CartSlice';/, "import { addItem, removeItem, updateQuantity } from './CartSlice';");
cartItem = cartItem.replace(/dispatch\(decreaseQuantity\(item\.id\)\)/g, "dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))");
cartItem = cartItem.replace(/dispatch\(increaseQuantity\(item\.id\)\)/g, "dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))");
cartItem = cartItem.replace(/dispatch\(removeFromCart\(item\.id\)\)/g, "dispatch(removeItem(item.id))");
fs.writeFileSync(path.join(srcDir, 'CartItem.jsx'), cartItem);

// 7. Update store.js
let storeCode = fs.readFileSync(path.join(reduxDir, 'store.js'), 'utf-8');
storeCode = storeCode.replace(/import cartReducer from '\.\/CartSlice';/, "import cartReducer from '../CartSlice';");
fs.writeFileSync(path.join(reduxDir, 'store.js'), storeCode);

console.log("Restructuring complete!");
