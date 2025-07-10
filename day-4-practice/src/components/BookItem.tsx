// src/components/BookItem.tsx
import React from 'react';
import { Card, Typography } from 'antd';
import { BookOutlined, UserOutlined, CalendarOutlined } from '@ant-design/icons';

const { Text } = Typography;

type BookItemProps = {
  title: string;
  author: string;
  year: number;
};

const BookItem = ({ title, author, year }: BookItemProps) => {
  return (
    <Card
      style={{
        width: 220,
        margin: '0.5rem',
        borderRadius: 10,
        boxShadow: '0 1px 5px rgba(0,0,0,0.06)',
      }}
    >
      <Text strong><BookOutlined /> {title}</Text><br />
      <Text type="secondary"><UserOutlined /> {author}</Text><br />
      <Text type="secondary"><CalendarOutlined /> {year}</Text>
    </Card>
  );
};

export default BookItem;
