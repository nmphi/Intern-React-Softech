import React, { useEffect, useRef, useState } from 'react';
import { Card, Typography, Button } from 'antd';

const { Title } = Typography;

const StopwatchInner = () => {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        console.log("Stopwatch unmounted and interval cleared");
      }
    };
  }, []);

  return (
    <Card bordered style={{ maxWidth: 400, margin: '0 auto', textAlign: 'center' }}>
      <Title level={4} style={{ color: '#3f8600' }}>Stopwatch Component</Title>
      <p>Time Elapsed: {seconds} seconds</p>
      <p>Unmount this component to clean up the timer.</p>
    </Card>
  );
};

const Stopwatch = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div style={{ textAlign: 'center' }}>
      <Button type="primary" onClick={() => setVisible((v) => !v)} style={{ marginBottom: 16 }}>
        {visible ? 'Stop & Unmount' : 'Start Stopwatch'}
      </Button>
      {visible && <StopwatchInner />}
    </div>
  );
};

export default Stopwatch;
