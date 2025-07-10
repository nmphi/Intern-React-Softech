// src/components/AuthPanel.tsx
import React, { useState } from 'react';
import { Card, Button, Typography } from 'antd';
import { CheckCircleOutlined} from '@ant-design/icons';
const { Text } = Typography;

const AuthPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Card
      title="Auth Panel"
      style={{ width: 300, margin: '2rem auto', textAlign: 'center' }}
      bordered
    >
      {!isLoggedIn ? (
        <>
          <Text>Please click below to login:</Text>
          <br />
          <Button type="primary" style={{ marginTop: 16 }} onClick={handleLogin}>
            Login
          </Button>
        </>
      ) : (
        <Text type="success" style={{ fontWeight: 400, fontSize: '1rem' }}>
          <CheckCircleOutlined style={{ fontSize: 32, color: 'green', marginBottom: 10 }} />
           <p>Login successfully!</p>
        </Text>
      )}
    </Card>
  );
};

export default AuthPanel;
