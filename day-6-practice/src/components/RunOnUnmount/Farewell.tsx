import React, { useEffect, useState } from 'react';
import { Card, Typography, Button } from 'antd';

const { Title } = Typography;

const FarewellInner = () => {
  useEffect(() => {
    return () => {
      alert("Component removed!");
    };
  }, []);

  return (
    <Card bordered style={{ maxWidth: 400, margin: '0 auto' }}>
      <Title level={4} style={{ color: '#cf1322' }}>
        Farewell Component
      </Title>
      <p>This alert will appear when this block unmounts.</p>
    </Card>
  );
};

const Farewell = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div style={{ textAlign: 'center' }}>
      <Button type="primary" onClick={() => setVisible((v) => !v)} style={{ marginBottom: 16 }}>
        {visible ? 'Hide Farewell' : 'Show Farewell'}
      </Button>
      {visible && <FarewellInner />}
    </div>
  );
};

export default Farewell;
