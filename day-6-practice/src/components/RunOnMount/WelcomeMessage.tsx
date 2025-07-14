import React, { useEffect } from 'react';
import { Card, Typography, message } from 'antd';

const { Title } = Typography;

const WelcomeMessage = () => {
    
  useEffect(() => {
    alert("Welcome to the app!");
    message.success("Welcome to the app!");
  }, []);

  return (
    <Card bordered style={{ maxWidth: 400, margin: '0 auto' }}>
      <Title level={4} style={{ color: '#1890ff' }}>
        Welcome Message Component
      </Title>
      <p>This component shows a welcome message on mount.</p>
    </Card>
  );
};

export default WelcomeMessage;
