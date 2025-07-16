import React, { useEffect, useState } from 'react';
import { Card, Typography, Button } from 'antd';

const { Title } = Typography;

const MouseTrackerInner = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      console.log("Mouse tracker unmounted and listener removed");
    };
  }, []);

  return (
    <Card bordered style={{ maxWidth: 400, margin: '0 auto', textAlign: 'center' }}>
      <Title level={4} style={{ color: '#722ed1' }}>Mouse Position Tracker</Title>
      <p>X: {position.x}</p>
      <p>Y: {position.y}</p>
    </Card>
  );
};

const MousePosition = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div style={{ textAlign: 'center' }}>
      <Button type="primary" onClick={() => setVisible((v) => !v)} style={{ marginBottom: 16 }}>
        {visible ? 'Stop Tracking' : 'Start Tracking'}
      </Button>
      {visible && <MouseTrackerInner />}
    </div>
  );
};

export default MousePosition;
