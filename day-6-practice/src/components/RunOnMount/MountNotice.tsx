import React, { useEffect } from 'react';
import { Card, Typography } from 'antd';

const { Title } = Typography;

const MountNotice = () => {
  useEffect(() => {
    console.log("Component mounted!");
  }, []);

  return (
    <Card bordered style={{ maxWidth: 400, margin: '0 auto' }}>
      <Title level={4} style={{ color: '#fa541c' }}>
        Mount Notice Component
      </Title>
      <p>Open the browser console to see the mount log.</p>
    </Card>
  );
};

export default MountNotice;
