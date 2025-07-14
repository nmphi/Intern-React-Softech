import React, { useState, useEffect } from 'react';
import { Card, Typography, Input, Row, Col } from 'antd';

const { Title } = Typography;

const MirrorInputs = () => {
  const [inputA, setInputA] = useState('');
  const [inputB, setInputB] = useState('');

  useEffect(() => {
    setInputB(inputA);
  }, [inputA]);

  return (
    <Card bordered style={{ maxWidth: 500, margin: '0 auto' }}>
      <Title level={4} style={{ color: '#eb2f96' }}>
        Mirror Inputs Component
      </Title>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Input
            placeholder="Input A"
            value={inputA}
            onChange={(e) => setInputA(e.target.value)}
          />
        </Col>
        <Col span={24}>
          <Input
            placeholder="Input B (mirrors A)"
            value={inputB}
            onChange={(e) => setInputB(e.target.value)}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default MirrorInputs;
