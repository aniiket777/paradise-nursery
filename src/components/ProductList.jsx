import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartSlice';

const plantsArray = [
  // Category 1: Indoor Plants
  { id: 1, name: "Snake Plant", price: 15, category: "Indoor Plants", image: import.meta.env.BASE_URL + "plants/snake-plant.svg" },
  { id: 2, name: "Spider Plant", price: 12, category: "Indoor Plants", image: import.meta.env.BASE_URL + "plants/spider-plant.svg" },
  { id: 3, name: "Peace Lily", price: 18, category: "Indoor Plants", image: import.meta.env.BASE_URL + "plants/peace-lily.svg" },
  { id: 4, name: "Monstera Deliciosa", price: 25, category: "Indoor Plants", image: import.meta.env.BASE_URL + "plants/monstera.svg" },
  { id: 5, name: "Fiddle Leaf Fig", price: 30, category: "Indoor Plants", image: import.meta.env.BASE_URL + "plants/zz-plant.svg" },
  { id: 6, name: "Pothos", price: 10, category: "Indoor Plants", image: import.meta.env.BASE_URL + "plants/rubber-plant.svg" },

  // Category 2: Succulents
  { id: 7, name: "Aloe Vera", price: 14, category: "Succulents", image: import.meta.env.BASE_URL + "plants/aloe-vera.svg" },
  { id: 8, name: "Jade Plant", price: 16, category: "Succulents", image: import.meta.env.BASE_URL + "plants/jade-plant.svg" },
  { id: 9, name: "Echeveria", price: 8, category: "Succulents", image: import.meta.env.BASE_URL + "plants/echeveria.svg" },
  { id: 10, name: "Zebra Plant", price: 11, category: "Succulents", image: import.meta.env.BASE_URL + "plants/zebra-plant.svg" },
  { id: 11, name: "String of Pearls", price: 15, category: "Succulents", image: import.meta.env.BASE_URL + "plants/string-of-pearls.svg" },
  { id: 12, name: "Burro's Tail", price: 13, category: "Succulents", image: import.meta.env.BASE_URL + "plants/burros-tail.svg" },

  // Category 3: Flowering Plants
  { id: 13, name: "African Violet", price: 12, category: "Flowering Plants", image: import.meta.env.BASE_URL + "plants/african-violet.svg" },
  { id: 14, name: "Orchid", price: 28, category: "Flowering Plants", image: import.meta.env.BASE_URL + "plants/orchid.svg" },
  { id: 15, name: "Anthurium", price: 22, category: "Flowering Plants", image: import.meta.env.BASE_URL + "plants/anthurium.svg" },
  { id: 16, name: "Begonia", price: 17, category: "Flowering Plants", image: import.meta.env.BASE_URL + "plants/begonia.svg" },
  { id: 17, name: "Christmas Cactus", price: 19, category: "Flowering Plants", image: import.meta.env.BASE_URL + "plants/christmas-cactus.svg" },
  { id: 18, name: "Hibiscus", price: 24, category: "Flowering Plants", image: import.meta.env.BASE_URL + "plants/hibiscus.svg" }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  const categories = ["Indoor Plants", "Succulents", "Flowering Plants"];

  return (
    <div className="product-list-container" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Paradise Nursery Plants</h1>
      
      {categories.map((category) => (
        <div key={category} className="category-section" style={{ marginBottom: '50px' }}>
          <h2 style={{ borderBottom: '2px solid #2e8b57', paddingBottom: '10px', marginBottom: '20px' }}>
            {category}
          </h2>
          <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
            {plantsArray
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const isAdded = cartItems.some((item) => item.id === plant.id);
                return (
                  <div key={plant.id} className="product-card" style={{ border: '1px solid #eee', borderRadius: '8px', padding: '15px', textAlign: 'center', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                    <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
                    <h3 style={{ margin: '15px 0 5px 0', fontSize: '1.2rem' }}>{plant.name}</h3>
                    <p style={{ margin: '0 0 15px 0', fontWeight: 'bold', color: '#2e8b57', fontSize: '1.1rem' }}>${plant.price}</p>
                    <button 
                      onClick={() => handleAddToCart(plant)}
                      disabled={isAdded}
                      style={{ 
                        backgroundColor: isAdded ? '#a9a9a9' : '#2e8b57', 
                        color: 'white', 
                        border: 'none', 
                        padding: '10px 20px', 
                        borderRadius: '4px', 
                        cursor: isAdded ? 'not-allowed' : 'pointer',
                        width: '100%',
                        fontWeight: 'bold',
                        transition: 'background-color 0.3s'
                      }}
                    >
                      {isAdded ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
