# Paradise Nursery Shopping Application

## 1. Project Overview
Paradise Nursery is a React-based houseplant shopping application where users can browse plants, add them to a shopping cart, manage quantities, and view the total cost.

## 2. Features
- Landing/Home page
- 3 plant categories
- 18 houseplants
- Product images, names and prices
- Add to Cart
- Disabled Add to Cart after selection
- Dynamic cart quantity
- Increase/decrease quantity
- Delete products
- Individual and grand totals
- Continue Shopping
- Checkout Coming Soon message
- Responsive navigation

## 3. Technologies Used
- React
- Vite
- Redux Toolkit
- React Redux
- React Router
- CSS
- JavaScript

## 4. Redux
The `CartSlice.jsx` file manages the shopping cart and supports:
- `addToCart`
- `increaseQuantity`
- `decreaseQuantity`
- `removeFromCart`

## 5. Project Structure
```text
src/
  components/
    Header.jsx
    AboutUs.jsx
    ProductList.jsx
    CartItem.jsx
  redux/
    CartSlice.jsx
    store.js
  App.jsx
  App.css
  main.jsx
```

## 6. How to Run
```bash
npm install
npm run dev
```

## 7. Build
```bash
npm run build
```

## 8. Deployment
The application is intended to be deployed using GitHub Pages.
