// src/components/DataLoader.tsx
import React, { useState } from 'react';
import { Card, Button, Spin } from 'antd';
import { CheckCircleOutlined, LoadingOutlined } from '@ant-design/icons';

const DataLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleFinishLoading = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleReload = () => {
    setIsLoading(true);
  };

  return (
    <Card
      style={{ width: 300, margin: '2rem auto', textAlign: 'center' }}
      bordered
    >
      {isLoading ? (
        <>
          <Spin
            indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
            style={{ marginBottom: '1rem' }}
          />
          <p>Loading data...</p>
          <Button type="primary" onClick={handleFinishLoading}>
            Complete Loading
          </Button>
        </>
      ) : (
        <>
          <CheckCircleOutlined style={{ fontSize: 32, color: 'green', marginBottom: 10 }} />
          <p>Data loaded successfully!</p>
          <Button onClick={handleReload}>Reload</Button>
        </>
      )}
    </Card>
  );
};

export default DataLoader;
