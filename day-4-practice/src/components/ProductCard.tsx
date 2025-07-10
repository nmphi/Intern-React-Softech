// src/components/ProductCard.tsx
import React from 'react';
import { Card, Typography, Tag } from 'antd';

const { Meta } = Card;
const { Text } = Typography;

type ProductCardProps = {
  name: string;
  price: number;
  isInStock: boolean;
};

const ProductCard = ({ name, price, isInStock }: ProductCardProps) => {
  return (
    <Card
      hoverable
      style={{ width: 220, borderRadius: 10 }}
      cover={
        <div
          style={{
            height: 120,
            background: '#f5f5f5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 32,
            color: '#bbb',
          }}
        >
          📦
        </div>
      }
    >
      <Meta
        title={name}
        description={
          <div>
            <Text strong style={{ color: 'green', display: 'block' }}>
              ${price.toFixed(2)}
            </Text>
            <Tag color={isInStock ? 'green' : 'red'}>
              {isInStock ? 'In stock' : 'Out of stock'}
            </Tag>
          </div>
        }
      />
    </Card>
  );
};

export default ProductCard;
