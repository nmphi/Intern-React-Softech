// src/components/PostItem.tsx
import React, { useState } from 'react';
import { Card, Typography, Button } from 'antd';

const { Title, Paragraph } = Typography;

type PostItemProps = {
  title: string;
  content: string;
  thumbnail?: string;
};

const PostItem = ({ title, content, thumbnail }: PostItemProps) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <Card
      hoverable
      style={{ width: 300, margin: '1rem', borderRadius: 10 }}
      cover={
        thumbnail ? (
          <img alt={title} src={thumbnail} />
        ) : (
          <div
            style={{
              height: 140,
              backgroundColor: '#f0f0f0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#aaa',
              fontSize: 24,
            }}
          >
            📰
          </div>
        )
      }
    >
      <Title level={5}>{title}</Title>

      {showContent && <Paragraph>{content}</Paragraph>}

      <Button type="link" onClick={() => setShowContent(!showContent)}>
        {showContent ? 'Hide Details' : 'View Details'}
      </Button>
    </Card>
  );
};

export default PostItem;
