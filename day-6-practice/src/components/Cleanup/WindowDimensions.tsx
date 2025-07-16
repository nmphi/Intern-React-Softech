import React, { useEffect, useState } from 'react';
import { Card, Typography, Button } from 'antd';

const { Title } = Typography;

const WindowDimensionsInner = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('Resize listener cleaned up');
    };
  }, []);

  return (
    <Card bordered style={{ maxWidth: 400, margin: '0 auto', textAlign: 'center' }}>
      <Title level={4} style={{ color: '#2f54eb' }}>Window Dimensions</Title>
      <p>Width: {dimensions.width}px</p>
      <p>Height: {dimensions.height}px</p>
    </Card>
  );
};

const WindowDimensions = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div style={{ textAlign: 'center' }}>
      <Button type="primary" onClick={() => setVisible((v) => !v)} style={{ marginBottom: 16 }}>
        {visible ? 'Stop Listening' : 'Start Listening'}
      </Button>
      {visible && <WindowDimensionsInner />}
    </div>
  );
};

export default WindowDimensions;
