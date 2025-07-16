import React, { useEffect, useRef, useState } from 'react';
import { Card, Typography, Button } from 'antd';

const { Title } = Typography;

const getRandomColor = () => {
  const colors = ['#ff4d4f', '#40a9ff', '#73d13d', '#fa8c16', '#9254de'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const ColorFlasherInner = () => {
  const [bgColor, setBgColor] = useState(getRandomColor());
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setBgColor(getRandomColor());
    }, 1000);

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        console.log('Color flasher interval cleared');
      }
    };
  }, []);

  return (
    <Card
      bordered
      style={{
        maxWidth: 400,
        margin: '0 auto',
        textAlign: 'center',
        backgroundColor: bgColor,
        color: '#fff',
        transition: 'background-color 0.5s ease',
      }}
    >
      <Title level={4}>Color Flasher</Title>
      <p>The background color changes every second.</p>
    </Card>
  );
};

const ColorFlasher = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div style={{ textAlign: 'center' }}>
      <Button type="primary" onClick={() => setVisible((v) => !v)} style={{ marginBottom: 16 }}>
        {visible ? 'Stop Flashing' : 'Start Flashing'}
      </Button>
      {visible && <ColorFlasherInner />}
    </div>
  );
};

export default ColorFlasher;
