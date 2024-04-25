import React from 'react';
import './styles.css'; // Importing CSS file for styling

const Product = ({ showProduct }) => {
  return (
    <div className="product-card">
      {/* Conditional rendering based on 'showProduct' prop */}
      {showProduct ? (
        <div>
          <img className="product-image" src="https://th.bing.com/th/id/OIP.Cj3EPLBCZyCq5rSzqhGx9wHaFL?w=272&h=191&c=7&r=0&o=5&pid=1.7" alt="Product" />
          <h3 className="product-name">SG Shoes</h3>
          <p className="product-price">$19.99</p>
        </div>
      ) : (
        <div>
          <p className="other-info">Sorry, product not available.</p>
          <p className="other-info">Check back later for more products!</p>
        </div>
      )}
    </div>
  );
};

export default Product;
