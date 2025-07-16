import React, { useEffect, useState } from 'react';
import { Card, Typography, Button } from 'antd';

const { Title } = Typography;

const TrackerInner = () => {
  useEffect(() => {
    return () => {
      console.log("Component unmounted!");
    };
  }, []);

  return (
    <Card bordered style={{ maxWidth: 400, margin: '0 auto' }}>
      <Title level={4} style={{ color: '#531dab' }}>
        Unmount Tracker Component
      </Title>
      <p>Check the console after clicking the button to hide this box.</p>
    </Card>
  );
};

const UnmountTracker = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div style={{ textAlign: 'center' }}>
      <Button type="primary" onClick={() => setVisible((v) => !v)} style={{ marginBottom: 16 }}>
        {visible ? 'Hide Tracker' : 'Show Tracker'}
      </Button>
      {visible && <TrackerInner />}
    </div>
  );
};

export default UnmountTracker;
