// src/components/ProductGrid.tsx
import React from 'react';
import ProductCard from './ProductCard';

const sampleProducts = [
  { id: 1, name: 'Wireless Headphones', price: 99.99, isInStock: true },
  { id: 2, name: 'Smart Watch', price: 249.99, isInStock: false },
  { id: 3, name: 'Bluetooth Speaker', price: 79.99, isInStock: true },
  { id: 4, name: 'Gaming Mouse', price: 59.99, isInStock: true },
];

const ProductGrid = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      {sampleProducts.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          isInStock={product.isInStock}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
