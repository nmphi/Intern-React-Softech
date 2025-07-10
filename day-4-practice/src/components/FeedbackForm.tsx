// src/components/FeedbackForm.tsx
import React, { useState } from 'react';
import { Card, Input, Typography } from 'antd';

const { TextArea } = Input;
const { Title, Paragraph } = Typography;

const FeedbackForm = () => {
  const [feedbackText, setFeedbackText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedbackText(e.target.value);
  };

  return (
    <Card
      title="Feedback Form"
      style={{ width: 400, margin: '2rem auto', borderRadius: 12 }}
    >
      <TextArea
        placeholder="Write your feedback here..."
        rows={4}
        value={feedbackText}
        onChange={handleChange}
        maxLength={200}
        showCount
      />

      <div style={{ marginTop: '1rem' }}>
        <Title level={5}>Live Preview:</Title>
        <Paragraph>{feedbackText || 'Your feedback will appear here.'}</Paragraph>
      </div>
    </Card>
  );
};

export default FeedbackForm;
