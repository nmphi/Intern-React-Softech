// src/components/LikeButton.tsx
import React, { useState } from 'react';
import { Button, Card, Typography } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

const { Title } = Typography;

const LikeButton = () => {
  const [likesCount, setLikesCount] = useState(0);

  const handleLike = () => {
    setLikesCount((prev) => prev + 1);
  };

  const handleReset = () => {
    setLikesCount(0);
  };

  return (
    <Card
      style={{
        width: 300,
        margin: '2rem auto',
        textAlign: 'center',
        borderRadius: 12,
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      }}
    >
      <div style={{ fontSize: 24, color: 'red' }}>❤️</div>
      <Title level={5} style={{ margin: '12px 0' }}>
        Like ({likesCount})
      </Title>

      <Button
        type="primary"
        icon={<HeartOutlined />}
        onClick={handleLike}
        style={{ backgroundColor: '#000', width: '100%', marginBottom: 12 }}
      >
        Like
      </Button>

      <Button onClick={handleReset} style={{ width: '100%', borderColor: '#d9d9d9' }} >
        <p>Reset</p>
      </Button>
    </Card>
  );
};

export default LikeButton;
