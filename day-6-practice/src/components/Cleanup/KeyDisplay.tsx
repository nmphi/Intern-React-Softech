import React, { useEffect, useState } from 'react';
import { Card, Typography, Button } from 'antd';

const { Title } = Typography;

const KeyDisplayInner = () => {
  const [key, setKey] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKey(e.key);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      console.log("Key listener cleaned up");
    };
  }, []);

  return (
    <Card bordered style={{ maxWidth: 400, margin: '0 auto', textAlign: 'center' }}>
      <Title level={4} style={{ color: '#f5222d' }}>Key Display</Title>
      <p>{key ? `You pressed: ${key}` : 'Press any key...'}</p>
    </Card>
  );
};

const KeyDisplay = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div style={{ textAlign: 'center' }}>
      <Button type="primary" onClick={() => setVisible((v) => !v)} style={{ marginBottom: 16 }}>
        {visible ? 'Stop Listening' : 'Start Listening'}
      </Button>
      {visible && <KeyDisplayInner />}
    </div>
  );
};

export default KeyDisplay;
