import React, { useState, useEffect } from 'react';
import { Card, Typography, Button } from 'antd';

const { Title } = Typography;

const ThemeBox = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#1f1f1f' : '#ffffff';
    document.body.style.color = darkMode ? '#ffffff' : '#000000';

    return () => {
      // Reset on unmount
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    };
  }, [darkMode]);

  return (
    <Card
      bordered
      style={{
        maxWidth: 400,
        margin: '0 auto',
        backgroundColor: darkMode ? '#141414' : '#fafafa',
        color: darkMode ? '#ffffff' : '#000000',
      }}
    >
      <Title level={4} style={{ color: darkMode ? '#40a9ff' : '#722ed1' }}>
        Theme Box Component
      </Title>
      <p>Current mode: {darkMode ? 'Dark' : 'Light'}</p>
      <Button type="default" onClick={() => setDarkMode((prev) => !prev)}>
        Toggle Theme
      </Button>
    </Card>
  );
};

export default ThemeBox;
