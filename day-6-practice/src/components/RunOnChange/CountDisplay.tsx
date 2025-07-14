import React, { useState, useEffect, useRef } from 'react';
import { Card, Typography, Button} from 'antd';

const { Title } = Typography;

const CountDisplay = () => {
  const [count, setCount] = useState(0);
  const hasMounted = useRef(false);

  useEffect(() => {
    // Prevent alert on first render
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    alert(`Count is now ${count}`);
  }, [count]);

  return (
    <Card bordered style={{ maxWidth: 400, margin: '0 auto' }}>
      <Title level={4} style={{ color: '#722ed1' }}>
        Count Display Component
      </Title>
      <p>Click the button to increase the count:</p>
      <Button type="primary" onClick={() => setCount((c) => c + 1)}>
        Increment
      </Button>
      <p style={{ marginTop: '10px' }}>Count: {count}</p>
    </Card>
  );
};

export default CountDisplay;
