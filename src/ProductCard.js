import React from 'react';
import './ProductCard.css'; // Importing CSS file for styling

// const products = [
//     { id: 1, name: 'SG Shoes', price: 20, available: true, image: 'https://th.bing.com/th/id/OIP.Cj3EPLBCZyCq5rSzqhGx9wHaFL?w=272&h=191&c=7&r=0&o=5&pid=1.7' },
//     { id: 2, name: 'DSC Shoes', price: 25, available: false, image: 'https://th.bing.com/th/id/OIP.o26o45IK1cAw6XQxKwYd7AHaGA?w=270&h=219&c=7&r=0&o=5&pid=1.7' },
//     { id: 3, name: 'New Balance Shoes', price: 30, available: true, image: 'https://th.bing.com/th/id/OIP.CgRdTQFLzgVJkbYC9eOW_QHaHa?w=202&h=202&c=7&r=0&o=5&pid=1.7' },
//     // Add more products as needed
//   ];

// const products = [
//     { id: 1, name: 'Product 1', price: 20, available: true, image: 'product1.jpg' },
//     { id: 2, name: 'Product 2', price: 25, available: false, image: 'product2.jpg' },
//     { id: 3, name: 'Product 3', price: 30, available: true, image: 'product3.jpg' },
//     // Add more products as needed
//   ];
  

const ProductCard = ({ product }) => {
  const { name, price, available, image } = product;

  return (
    <div className="product-card">
      {/* Conditional rendering based on product availability */}
      {available ? (
        <div>
          <img className="product-image" src={image} alt={name} />
          <h3 className="product-name">{name}</h3>
          <p className="product-price">${price}</p>
        </div>
      ) : (
        <div>
          <p className="unavailable-text">Product Not Available</p>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
