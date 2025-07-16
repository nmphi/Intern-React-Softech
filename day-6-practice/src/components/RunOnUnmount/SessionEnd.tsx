import React, { useEffect, useState } from 'react';
import { Card, Typography, Button } from 'antd';

const { Title } = Typography;

const SessionInner = () => {
  useEffect(() => {
    return () => {
      console.log("Session ended!");
    };
  }, []);

  return (
    <Card bordered style={{ maxWidth: 400, margin: '0 auto' }}>
      <Title level={4} style={{ color: '#08979c' }}>
        Session End Component
      </Title>
      <p>Unmounting this block simulates a session ending.</p>
    </Card>
  );
};

const SessionEnd = () => {
  const [active, setActive] = useState(true);

  return (
    <div style={{ textAlign: 'center' }}>
      <Button type="primary" onClick={() => setActive((prev) => !prev)} style={{ marginBottom: 16 }}>
        {active ? 'End Session' : 'Start Session'}
      </Button>
      {active && <SessionInner />}
    </div>
  );
};

export default SessionEnd;
