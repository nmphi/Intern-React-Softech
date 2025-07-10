// src/components/Card.tsx
import React from 'react';

type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <div
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: 12,
        padding: '1.5rem',
        background: '#fff',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        marginBottom: '1.5rem',
      }}
    >
      {children}
    </div>
  );
};

export default Card;
