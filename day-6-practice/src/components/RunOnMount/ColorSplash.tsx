import React, { useEffect } from 'react';
import { Card, Typography } from 'antd';

const { Title } = Typography;

const getRandomColor = () => {
  const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const ColorSplash = () => {
  useEffect(() => {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;

    // Optional: reset background color when component unmounts
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <Card bordered style={{ maxWidth: 400, margin: '0 auto' }}>
      <Title level={4} style={{ color: '#722ed1' }}>
        Color Splash Component
      </Title>
      <p>The background color changes randomly when this component mounts.</p>
    </Card>
  );
};

export default ColorSplash;
