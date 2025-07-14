import React, { useState, useEffect } from 'react';
import { Card, Typography, Input } from 'antd';

const { Title } = Typography;

const PageTitle = () => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    document.title = title || 'React App';
  }, [title]);

  return (
    <Card bordered style={{ maxWidth: 400, margin: '0 auto' }}>
      <Title level={4} style={{ color: '#13c2c2' }}>
        Page Title Component
      </Title>
      <p>Type to change the browser tab title:</p>
      <Input
        placeholder="Enter page title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        allowClear
      />
    </Card>
  );
};

export default PageTitle;
